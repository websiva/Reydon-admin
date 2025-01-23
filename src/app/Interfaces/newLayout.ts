import { LayoutAddress } from "./LayoutAddress";
import { LayoutAminities } from "./LayoutAminities";
import { LayoutBanks } from "./LayoutBanks";
import { LayoutDocuments } from "./LayoutDocuments";
import { LayoutFiveReasons } from "./LayoutFiveReasons";
import { LayoutLegalAndFinancial } from "./LayoutLegalAndFinancials";
import { LayoutProximities } from "./LayoutProximity";

export interface newLayout{
    ProjectName:string,
    Type:string,
    Category:string,
    Thumbnail:string,
    HeaderLocation:string,
    DTCPApproved:boolean,
    RERAApproved:boolean,
    VerifiedByReydon:boolean,
    PricePerSqft:number,
    YoutubeLink:string,
    TotalArea:number,
    TotalPlots:number,
    AvailablePlots:number,
    PropertyDescription:string,
    NoOfPhases:number,
    Address:LayoutAddress,
    Aminities:string[],
    Proximities:LayoutProximities[],
    FiveReasons:LayoutFiveReasons[],
    LegalAndFinancials:LayoutLegalAndFinancial,
    BankPartners:string[],
    Documents:LayoutDocuments
}