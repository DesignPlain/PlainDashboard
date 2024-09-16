import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface IngestionArgs {
  /*
Name of the application.
Refer to the AWS Documentation for the [list of valid values](https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html#appfabric-CreateIngestion-request-app)
*/
  app?: string;

  // Amazon Resource Name (ARN) of the app bundle to use for the request.
  appBundleArn?: string;

  // Ingestion type. Valid values are `auditLog`.
  ingestionType?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;

  // ID of the application tenant.
  tenantId?: string;
}
export class Ingestion extends DS_Resource {
  /*
Name of the application.
Refer to the AWS Documentation for the [list of valid values](https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html#appfabric-CreateIngestion-request-app)
*/
  public app?: string;

  // Amazon Resource Name (ARN) of the app bundle to use for the request.
  public appBundleArn?: string;

  // ARN of the Ingestion.
  public arn?: string;

  // Ingestion type. Valid values are `auditLog`.
  public ingestionType?: string;

  // Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // Map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // ID of the application tenant.
  public tenantId?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.Map,
        'tags',
        'Map of tags to assign to the resource. If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.',
        () => InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'tenantId',
        'ID of the application tenant.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'app',
        'Name of the application.\nRefer to the AWS Documentation for the [list of valid values](https://docs.aws.amazon.com/appfabric/latest/api/API_CreateIngestion.html#appfabric-CreateIngestion-request-app)',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'appBundleArn',
        'Amazon Resource Name (ARN) of the app bundle to use for the request.',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'ingestionType',
        'Ingestion type. Valid values are `auditLog`.',
        () => [],
        true,
        false,
      ),
    ];
  }
}
