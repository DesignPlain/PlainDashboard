import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from "src/app/components/resource-config/resource-config.component";
import {
  macie2_ClassificationExportConfigurationS3Destination,
  macie2_ClassificationExportConfigurationS3Destination_GetTypes,
} from "../types/macie2_ClassificationExportConfigurationS3Destination";

export interface ClassificationExportConfigurationArgs {
  // Configuration block for a S3 Destination. Defined below
  s3Destination?: macie2_ClassificationExportConfigurationS3Destination;
}
export class ClassificationExportConfiguration extends Resource {
  // Configuration block for a S3 Destination. Defined below
  public s3Destination?: macie2_ClassificationExportConfigurationS3Destination;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "s3Destination",
        "Configuration block for a S3 Destination. Defined below",
        macie2_ClassificationExportConfigurationS3Destination_GetTypes(),
        false,
        false,
      ),
    ];
  }
}
