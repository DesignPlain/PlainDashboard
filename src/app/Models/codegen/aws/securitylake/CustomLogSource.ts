import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  securitylake_CustomLogSourceProviderDetail,
  securitylake_CustomLogSourceProviderDetail_GetTypes,
} from '../types/securitylake_CustomLogSourceProviderDetail';
import {
  securitylake_CustomLogSourceAttribute,
  securitylake_CustomLogSourceAttribute_GetTypes,
} from '../types/securitylake_CustomLogSourceAttribute';
import {
  securitylake_CustomLogSourceConfiguration,
  securitylake_CustomLogSourceConfiguration_GetTypes,
} from '../types/securitylake_CustomLogSourceConfiguration';

export interface CustomLogSourceArgs {
  // Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
  sourceVersion?: string;

  // The configuration for the third-party custom source.
  configuration?: securitylake_CustomLogSourceConfiguration;

  // The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.
  eventClasses?: Array<string>;

  /*
Specify the name for a third-party custom source.
This must be a Regionally unique value.
Has a maximum length of 20.
*/
  sourceName?: string;
}
export class CustomLogSource extends DS_Resource {
  // The details of the log provider for a third-party custom source.
  public providerDetails?: Array<securitylake_CustomLogSourceProviderDetail>;

  /*
Specify the name for a third-party custom source.
This must be a Regionally unique value.
Has a maximum length of 20.
*/
  public sourceName?: string;

  // Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.
  public sourceVersion?: string;

  // The attributes of a third-party custom source.
  public attributes?: Array<securitylake_CustomLogSourceAttribute>;

  // The configuration for the third-party custom source.
  public configuration?: securitylake_CustomLogSourceConfiguration;

  // The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.
  public eventClasses?: Array<string>;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'sourceVersion',
        'Specify the source version for the third-party custom source, to limit log collection to a specific version of custom data source.',
        () => [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Object,
        'configuration',
        'The configuration for the third-party custom source.',
        () => securitylake_CustomLogSourceConfiguration_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Array,
        'eventClasses',
        'The Open Cybersecurity Schema Framework (OCSF) event classes which describes the type of data that the custom source will send to Security Lake.',
        () => InputType_String_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'sourceName',
        'Specify the name for a third-party custom source.\nThis must be a Regionally unique value.\nHas a maximum length of 20.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
