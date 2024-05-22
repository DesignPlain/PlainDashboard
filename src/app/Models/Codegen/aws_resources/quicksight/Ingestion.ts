import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";

export interface IngestionArgs {
  // ID of the dataset used in the ingestion.
  dataSetId?: string;

  // ID for the ingestion.
  ingestionId?: string;

  /*
Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.

The following arguments are optional:
*/
  ingestionType?: string;

  // AWS account ID.
  awsAccountId?: string;
}
export class Ingestion extends Resource {
  /*
Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.

The following arguments are optional:
*/
  public ingestionType?: string;

  // ARN of the Ingestion.
  public arn?: string;

  // AWS account ID.
  public awsAccountId?: string;

  // ID of the dataset used in the ingestion.
  public dataSetId?: string;

  // ID for the ingestion.
  public ingestionId?: string;

  // Ingestion status.
  public ingestionStatus?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "dataSetId",
        "ID of the dataset used in the ingestion.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingestionId",
        "ID for the ingestion.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingestionType",
        "Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.\n\nThe following arguments are optional:",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        [],
        false,
        false,
      ),
    ];
  }
}
