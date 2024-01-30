export interface Justification {
	comment: string;
	percentage: number;
	imageURL?: string;
	planetaryBoundary?: string;
}

export interface Evaluation {
	organisationGUID: string;
	targetGUID: string;
	title?: string;
	reportTitle?: string;
	uploadDate?: Date;
	accountingPeriodStart?: Date;
	accountingPeriodEnd?: Date;
	pvt?: number;
	nvt?: number;
	GUID?: string;
	evaluationContent?: {
		comments: string;
		/* planetJustifications?: Array<{
			comment: string;
			percentage: number;
			planetImage?: string;
			planetaryBoundary?: string;
		}>; */
		justifications?: {
			[key: string]: Array<Justification>;
		};
	};
	author?: string;
	date?: Date;
}
