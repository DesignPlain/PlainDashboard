import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DS_Resource } from "../../ds_base/Resource";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface IngestionArgs {
  // AWS account ID.
  awsAccountId?: string;

  // ID of the dataset used in the ingestion.
  dataSetId?: string;

  // ID for the ingestion.
  ingestionId?: string;

  /*
Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.

The following arguments are optional:
*/
  ingestionType?: string;
}
export class Ingestion extends DS_Resource {
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

  /*
Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.

The following arguments are optional:
*/
  public ingestionType?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "awsAccountId",
        "AWS account ID.",
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "dataSetId",
        "ID of the dataset used in the ingestion.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingestionId",
        "ID for the ingestion.",
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "ingestionType",
        "Type of ingestion to be created. Valid values are `INCREMENTAL_REFRESH` and `FULL_REFRESH`.\n\nThe following arguments are optional:",
        () => [],
        true,
        false,
      ),
    ];
  }
}
