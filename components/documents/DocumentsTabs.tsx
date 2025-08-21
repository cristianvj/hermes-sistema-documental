"use client"

import { Tabs, TabsList, TabsTrigger } from '../ui/tabs'
import { tabsValues } from '@/lib/constants/documents'
import TabDocuments from './TabDocuments'
import TabUpload from './TabUpload'
import TabScan from './TabScan'
import TabArchive from './TabArchive'

const DocumentsTabs = () => {
	const { DOCUMENTS, UPLOAD, SCAN, ARCHIVE } = tabsValues;

	return (
		<Tabs defaultValue="documents" className="space-y-6">
			<div className='overflow-x-auto'>
				<TabsList className="w-xl sm:w-full sm:px-6">
					<TabsTrigger value={DOCUMENTS}>Documentos</TabsTrigger>
					<TabsTrigger value={UPLOAD}>Subir Documento</TabsTrigger>
					<TabsTrigger value={SCAN}>Escanear</TabsTrigger>
					<TabsTrigger value={ARCHIVE}>Archivo</TabsTrigger>
				</TabsList>
			</div>
			<TabDocuments />
			<TabUpload />
			<TabScan />
			<TabArchive />
		</Tabs>
	)
}

export default DocumentsTabs