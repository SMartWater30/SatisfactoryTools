import {IBuildingMetadataSchema, IManufacturerMetadataSchema} from '@src/Schema/IBuildingMetadataSchema';

export interface IBuildingSchema
{

	slug: string;
	name: string;
	description: string;
	className: string;
	categories: string[];
	buildMenuPriority: number;
	metadata: IBuildingMetadataSchema;

}

export interface IManufacturerSchema extends IBuildingSchema
{

	metadata: IManufacturerMetadataSchema;

}
