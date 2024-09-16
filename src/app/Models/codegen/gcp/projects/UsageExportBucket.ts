import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface UsageExportBucketArgs {
  // The bucket to store reports in.
  bucketName?: string;

  // A prefix for the reports, for instance, the project name.
  prefix?: string;

  // The project to set the export bucket on. If it is not provided, the provider project is used.
  project?: string;
}
export class UsageExportBucket extends DS_Resource {
  // The bucket to store reports in.
  public bucketName?: string;

  // A prefix for the reports, for instance, the project name.
  public prefix?: string;

  // The project to set the export bucket on. If it is not provided, the provider project is used.
  public project?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'project',
        'The project to set the export bucket on. If it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'bucketName',
        'The bucket to store reports in.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'prefix',
        'A prefix for the reports, for instance, the project name.',
        () => [],
        false,
        true,
      ),
    ];
  }
}
