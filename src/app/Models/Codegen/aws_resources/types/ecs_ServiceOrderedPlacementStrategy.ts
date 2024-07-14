import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface ecs_ServiceOrderedPlacementStrategy {
  /*
For the `spread` placement strategy, valid values are `instanceId` (or `host`,
which has the same effect), or any platform or custom attribute that is applied to a container instance.
For the `binpack` type, valid values are `memory` and `cpu`. For the `random` type, this attribute is not
needed. For more information, see [Placement Strategy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html).

> --Note:-- for `spread`, `host` and `instanceId` will be normalized, by AWS, to be `instanceId`. This means the statefile will show `instanceId` but your config will differ if you use `host`.
*/
  field?: string;

  // Type of placement strategy. Must be one of: `binpack`, `random`, or `spread`
  type?: string;
}

export function ecs_ServiceOrderedPlacementStrategy_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      "type",
      "Type of placement strategy. Must be one of: `binpack`, `random`, or `spread`",
      [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.String,
      "field",
      "For the `spread` placement strategy, valid values are `instanceId` (or `host`,\nwhich has the same effect), or any platform or custom attribute that is applied to a container instance.\nFor the `binpack` type, valid values are `memory` and `cpu`. For the `random` type, this attribute is not\nneeded. For more information, see [Placement Strategy](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_PlacementStrategy.html).\n\n> **Note:** for `spread`, `host` and `instanceId` will be normalized, by AWS, to be `instanceId`. This means the statefile will show `instanceId` but your config will differ if you use `host`.",
      [],
      false,
      false,
    ),
  ];
}
