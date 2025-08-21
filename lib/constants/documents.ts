// Datos de ejemplo para documentos
export const documents = [
	{
		id: "DOC-2024-001",
		title: "Decreto Municipal N° 001-2024",
		category: "Decretos",
		mayor: "María González",
		date: "2024-01-15",
		status: "Activo",
		type: "PDF",
		size: "2.3 MB",
		description: "Decreto sobre regulación de construcciones urbanas",
	},
	{
		id: "DOC-2024-002",
		title: "Ordenanza de Tránsito Municipal",
		category: "Ordenanzas",
		mayor: "María González",
		date: "2024-01-20",
		status: "En Revisión",
		type: "PDF",
		size: "1.8 MB",
		description: "Nueva ordenanza para regulación del tránsito vehicular",
	},
	{
		id: "DOC-2024-003",
		title: "Acta de Sesión Ordinaria",
		category: "Actas",
		mayor: "María González",
		date: "2024-01-25",
		status: "Archivado",
		type: "PDF",
		size: "3.1 MB",
		description: "Acta de la sesión ordinaria del consejo municipal",
	},
	{
		id: "DOC-2024-004",
		title: "Resolución Administrativa N° 015",
		category: "Resoluciones",
		mayor: "María González",
		date: "2024-02-01",
		status: "Activo",
		type: "PDF",
		size: "1.5 MB",
		description: "Resolución sobre contratación de personal municipal",
	},
	{
		id: "DOC-2024-005",
		title: "Informe de Gestión Trimestral",
		category: "Informes",
		mayor: "María González",
		date: "2024-02-10",
		status: "Activo",
		type: "PDF",
		size: "4.2 MB",
		description: "Informe de gestión del primer trimestre 2024",
	},
];

export const categories = ["Decretos", "Ordenanzas", "Actas", "Resoluciones", "Informes", "Contratos"];
export const statuses = ["Activo", "En Revisión", "Archivado", "Borrador"];
export const tabsValues = {DOCUMENTS: "documents", UPLOAD: "upload", SCAN:"scan", ARCHIVE: "archive"};