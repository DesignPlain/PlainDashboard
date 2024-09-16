import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DS_Resource } from '../../ds_base/Resource';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';

export interface ConsumerQuotaOverrideArgs {
  // The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
  overrideValue?: string;

  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  project?: string;

  // The service that the metrics belong to, e.g. `compute.googleapis.com`.
  service?: string;

  // If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
  dimensions?: Map<string, string>;

  /*
If the new quota would decrease the existing quota by more than 10%!!(MISSING),(MISSING) the request is rejected.
If `force` is `true`, that safety check is ignored.
*/
  force?: boolean;

  /*
The limit on the metric, e.g. `/project/region`.
> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.
E.g. use `/project/user` instead of `1/{project}/{user}`.


- - -
*/
  limit?: string;

  // The metric that should be limited, e.g. `compute.googleapis.com/cpus`.
  metric?: string;
}
export class ConsumerQuotaOverride extends DS_Resource {
  /*
The ID of the project in which the resource belongs.
If it is not provided, the provider project is used.
*/
  public project?: string;

  // The service that the metrics belong to, e.g. `compute.googleapis.com`.
  public service?: string;

  // If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.
  public dimensions?: Map<string, string>;

  /*
If the new quota would decrease the existing quota by more than 10%!!(MISSING),(MISSING) the request is rejected.
If `force` is `true`, that safety check is ignored.
*/
  public force?: boolean;

  /*
The limit on the metric, e.g. `/project/region`.
> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.
E.g. use `/project/user` instead of `1/{project}/{user}`.


- - -
*/
  public limit?: string;

  // The metric that should be limited, e.g. `compute.googleapis.com/cpus`.
  public metric?: string;

  // The server-generated name of the quota override.
  public name?: string;

  // The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).
  public overrideValue?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        'limit',
        "The limit on the metric, e.g. `/project/region`.\n> Make sure that `limit` is in a format that doesn't start with `1/` or contain curly braces.\nE.g. use `/project/user` instead of `1/{project}/{user}`.\n\n\n- - -",
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'metric',
        'The metric that should be limited, e.g. `compute.googleapis.com/cpus`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'overrideValue',
        'The overriding quota limit value. Can be any nonnegative integer, or -1 (unlimited quota).',
        () => [],
        true,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        'project',
        'The ID of the project in which the resource belongs.\nIf it is not provided, the provider project is used.',
        () => [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.String,
        'service',
        'The service that the metrics belong to, e.g. `compute.googleapis.com`.',
        () => [],
        true,
        true,
      ),
      new DynamicUIProps(
        InputType.Map,
        'dimensions',
        'If this map is nonempty, then this override applies only to specific values for dimensions defined in the limit unit.',
        () => InputType_Map_GetTypes(),
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Bool,
        'force',
        'If the new quota would decrease the existing quota by more than 10%!,(MISSING) the request is rejected.\nIf `force` is `true`, that safety check is ignored.',
        () => [],
        false,
        false,
      ),
    ];
  }
}
