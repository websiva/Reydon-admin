import { LayoutAddress } from "./LayoutAddress";
import { LayoutBanks } from "./LayoutBanks";
import { LayoutFiveReasons } from "./LayoutFiveReasons";
import { LayoutLegalAndFinancial } from "./LayoutLegalAndFinancials";
import { LayoutProximities } from "./LayoutProximity";

export interface newLayout{
    ProjectName:string,
    Type:string,
    Thumbnail:string,
    Category:string,
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
    Aminities:LayoutAddress[],
    Proximities:LayoutProximities[],
    FiveReasons:LayoutFiveReasons[],
    LegalAndFinancials:LayoutLegalAndFinancial,
    BankPartners:LayoutBanks[]
}