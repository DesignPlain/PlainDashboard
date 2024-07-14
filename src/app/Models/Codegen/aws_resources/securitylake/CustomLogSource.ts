import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  securitylake_CustomLogSourceConfiguration,
  securitylake_CustomLogSourceConfiguration_GetTypes,
} from "../types/securitylake_CustomLogSourceConfiguration";
import {
  securitylake_CustomLogSourceProviderDetail,
  securitylake_CustomLogSourceProviderDetail_GetTypes,
} from "../types/securitylake_CustomLogSourceProviderDetail";
import {
  securitylake_CustomLogSourceAttribute,
  securitylake_CustomLogSourceAttribute_GetTypes,
} from "../types/securitylake_CustomLogSourceAttribute";

export interface CustomLogSourceArgs {
  // The configuration for the third-party custom source.
  configuration?: securitylake_CustomLogSourceConfiguration;

  // The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.
  eventClasses?: Array<string>;

  // Specify the name for a third-party custom source. This must be a Regionally unique value.
  sourceName?: string;

  // Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
  sourceVersion?: string;
}
export class CustomLogSource extends Resource {
  // The configuration for the third-party custom source.
  public configuration?: securitylake_CustomLogSourceConfiguration;

  // The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.
  public eventClasses?: Array<string>;

  // The details of the log provider for a third-party custom source.
  public providerDetails?: Array<securitylake_CustomLogSourceProviderDetail>;

  // Specify the name for a third-party custom source. This must be a Regionally unique value.
  public sourceName?: string;

  // Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
  public sourceVersion?: string;

  // The attributes of a third-party custom source.
  public attributes?: Array<securitylake_CustomLogSourceAttribute>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Object,
        "configuration",
        "The configuration for the third-party custom source.",
        securitylake_CustomLogSourceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        "eventClasses",
        "The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.",
        InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceName",
        "Specify the name for a third-party custom source. This must be a Regionally unique value.",
        [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "sourceVersion",
        "Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.",
        [],
        false,
        false,
      ),
    ];
  }
}
