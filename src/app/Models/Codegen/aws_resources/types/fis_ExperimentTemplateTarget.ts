import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  fis_ExperimentTemplateTargetResourceTag,
  fis_ExperimentTemplateTargetResourceTag_GetTypes,
} from "./fis_ExperimentTemplateTargetResourceTag";
import {
  fis_ExperimentTemplateTargetFilter,
  fis_ExperimentTemplateTargetFilter_GetTypes,
} from "./fis_ExperimentTemplateTargetFilter";

export interface fis_ExperimentTemplateTarget {
  // Tag(s) the resources need to have to be considered a valid target for an action. Conflicts with `resource_arns`. See below.
  resourceTags?: Array<fis_ExperimentTemplateTargetResourceTag>;

  // AWS resource type. The resource type must be supported for the specified action. To find out what resource types are supported, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#resource-types).
  resourceType?: string;

  // Scopes the identified resources. Valid values are `ALL` (all identified resources), `COUNT(n)` (randomly select `n` of the identified resources), `PERCENT(n)` (randomly select `n` percent of the identified resources).
  selectionMode?: string;

  // Filter(s) for the target. Filters can be used to select resources based on specific attributes returned by the respective describe action of the resource type. For more information, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters). See below.
  filters?: Array<fis_ExperimentTemplateTargetFilter>;

  // Friendly name given to the target.
  name?: string;

  /*
The resource type parameters.

> --NOTE:-- The `target` configuration block requires either `resource_arns` or `resource_tag`.
*/
  parameters?: Map<string, string>;

  // Set of ARNs of the resources to target with an action. Conflicts with `resource_tag`.
  resourceArns?: Array<string>;
}

export function fis_ExperimentTemplateTarget_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "selectionMode",
      "Scopes the identified resources. Valid values are `ALL` (all identified resources), `COUNT(n)` (randomly select `n` of the identified resources), `PERCENT(n)` (randomly select `n` percent of the identified resources).",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "filters",
      "Filter(s) for the target. Filters can be used to select resources based on specific attributes returned by the respective describe action of the resource type. For more information, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#target-filters). See below.",
      fis_ExperimentTemplateTargetFilter_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "name",
      "Friendly name given to the target.",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Map,
      "parameters",
      "The resource type parameters.\n\n> **NOTE:** The `target` configuration block requires either `resource_arns` or `resource_tag`.",
      InputType_Map_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceArns",
      "Set of ARNs of the resources to target with an action. Conflicts with `resource_tag`.",
      InputType_String_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "resourceTags",
      "Tag(s) the resources need to have to be considered a valid target for an action. Conflicts with `resource_arns`. See below.",
      fis_ExperimentTemplateTargetResourceTag_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "resourceType",
      "AWS resource type. The resource type must be supported for the specified action. To find out what resource types are supported, see [Targets for AWS FIS](https://docs.aws.amazon.com/fis/latest/userguide/targets.html#resource-types).",
      [],
      true,
      false,
    ),
  ];
}
