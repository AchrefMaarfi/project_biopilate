import api from "@/lib/api";
import { Formation, Option, FormationCategory } from "@/types/types";
import { useEffect, useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";

export default function FormationShow() {
    const [formations, setFormations] = useState<Formation[]>([]);
    const [options, setOptions] = useState<Option[]>([]);
    const [formationCategories, setFormationCategories] = useState<FormationCategory[]>([]);
    const [filteredFormations, setFilteredFormations] = useState<Formation[]>([]);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [statusFilter, setStatusFilter] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    const getFormations = async () => {
        try {
            const res = await api.get<Formation[]>("formations/");
            setFormations(res.data);
        } catch (error) {
            console.error("Error fetching formations", error);
        }
    };

    const getOptions = async () => {
        try {
            const res = await api.get<Option[]>("options/");
            setOptions(res.data);
        } catch (error) {
            console.error("Error fetching options", error);
        }
    };

    const getFormationCategories = async () => {
        try {
            const res = await api.get<FormationCategory[]>("selected-options/");
            setFormationCategories(res.data);
        } catch (error) {
            console.error("Error fetching selected options", error);
        }
    };

    useEffect(() => {
        getFormations();
        getOptions();
        getFormationCategories();
    }, []);

    const filterFormations = () => {
        if (formations) {
            const filtered = formations.filter((formation) => {
                const formattedDate = new Date(formation.created_at).toLocaleDateString();
                const fullText = `${formation.title} ${formattedDate}`.toLowerCase();
                const matchesSearchTerm = fullText.includes(searchTerm.toLowerCase());
                const matchesStatusFilter = statusFilter ? formation.status === statusFilter : true;
                return matchesSearchTerm && matchesStatusFilter;
            });
            setFilteredFormations(filtered);
        }
    };

    useEffect(() => {
        filterFormations();
    }, [searchTerm, statusFilter, formations]);

    const deleteFormation = async (id: number) => {
        try {
            await api.delete(`formations/${id}/`);
            getFormations();
        } catch (error) {
            console.error("Error deleting formation", error);
        }
    };

    const handleEditClick = (id: number) => {
        navigate(`/edit-formation/${id}`);
    };

    const handleAddClick = () => {
        navigate("/add-formation");
    };

    const paginatedFormations = filteredFormations.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

    const handleChangeRowsPerPage = (value: number) => {
        setRowsPerPage(value);
        setCurrentPage(1); // Reset to first page whenever rows per page change
    };

    return (
        <Card>
            <CardHeader className="px-7">
                <div className="flex justify-between">
                    <CardTitle>Liste des Formations</CardTitle>
                    <div className="flex space-x-4">
                        <Input
                            type="text"
                            placeholder="Rechercher"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full"
                        />
                    </div>
                    <div className="flex items-center mt-4">
                        <Label htmlFor="rowsPerPage">Afficher:</Label>
                        <select
                            id="rowsPerPage"
                            value={rowsPerPage}
                            onChange={(e) => handleChangeRowsPerPage(Number(e.target.value))}
                            className="ml-2 border-gray-300 rounded-md"
                        >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </select>
                        <select
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value)}
                            className="ml-2 border-gray-300 rounded-md"
                        >
                            <option value="">Tous les statuts</option>
                            <option value="pending">En attente</option>
                            <option value="approved">Publiée</option>
                        </select>
                    </div>
                    <Button variant="default" onClick={handleAddClick}>
                        Ajouter une formation
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Titre</TableHead>
                            <TableHead className="hidden sm:table-cell">Status</TableHead>
                            <TableHead className="hidden md:table-cell">Créé le</TableHead>
                            <TableHead className="hidden md:table-cell">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {paginatedFormations.map((formation: Formation) => (
                            <TableRow key={formation.id} className="bg-accent">
                                <TableCell>
                                    <div className="flex items-center space-x-4">
                                        <div className="font-medium">{formation.title}</div>
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">
                                    <div className="flex space-x-2">
                                        {status === "pending" && <span className="text-danger">En attente</span>}
                                        {status === "approved" && <span className="text-emerald-500">Publiée</span>}
                                    </div>
                                </TableCell>
                                <TableCell className="hidden md:table-cell">{new Date(formation.created_at).toLocaleDateString()}</TableCell>
                                <TableCell className="text-right">
                                    <div className="flex space-x-2">
                                        <Button variant="secondary" onClick={() => handleEditClick(formation.id)}>
                                            <FaEdit />
                                        </Button>
                                        <Button variant="danger" onClick={() => deleteFormation(formation.id)}>
                                            <FaTrash />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <div className="flex justify-end mt-4">
                    <Button
                        variant="secondary"
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="secondary"
                        onClick={() => setCurrentPage((prev) => (prev * rowsPerPage < filteredFormations.length ? prev + 1 : prev))}
                        disabled={currentPage * rowsPerPage >= filteredFormations.length}
                    >
                        Next
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
