import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { Resource } from "src/app/Models/CloudResource";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';
import {
  mediaconvert_QueueReservationPlanSettings,
  mediaconvert_QueueReservationPlanSettings_GetTypes,
} from "../types/mediaconvert_QueueReservationPlanSettings";

export interface QueueArgs {
  // A description of the queue
  description?: string;

  // A unique identifier describing the queue
  name?: string;

  // Specifies whether the pricing plan for the queue is on-demand or reserved. Valid values are `ON_DEMAND` or `RESERVED`. Default to `ON_DEMAND`.
  pricingPlan?: string;

  // A detail pricing plan of the  reserved queue. See below.
  reservationPlanSettings?: mediaconvert_QueueReservationPlanSettings;

  // A status of the queue. Valid values are `ACTIVE` or `RESERVED`. Default to `PAUSED`.
  status?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  tags?: Map<string, string>;
}
export class Queue extends Resource {
  // A unique identifier describing the queue
  public name?: string;

  // Specifies whether the pricing plan for the queue is on-demand or reserved. Valid values are `ON_DEMAND` or `RESERVED`. Default to `ON_DEMAND`.
  public pricingPlan?: string;

  // A detail pricing plan of the  reserved queue. See below.
  public reservationPlanSettings?: mediaconvert_QueueReservationPlanSettings;

  // A status of the queue. Valid values are `ACTIVE` or `RESERVED`. Default to `PAUSED`.
  public status?: string;

  // A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.
  public tags?: Map<string, string>;

  // A map of tags assigned to the resource, including those inherited from the provider `default_tags` configuration block.
  public tagsAll?: Map<string, string>;

  // The Arn of the queue
  public arn?: string;

  // A description of the queue
  public description?: string;

  public static GetTypes(): DynamicUIProps[] {
    return [
      new DynamicUIProps(
        InputType.String,
        "pricingPlan",
        "Specifies whether the pricing plan for the queue is on-demand or reserved. Valid values are `ON_DEMAND` or `RESERVED`. Default to `ON_DEMAND`.",
        [],
        false,
        true,
      ),
      new DynamicUIProps(
        InputType.Object,
        "reservationPlanSettings",
        "A detail pricing plan of the  reserved queue. See below.",
        mediaconvert_QueueReservationPlanSettings_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "status",
        "A status of the queue. Valid values are `ACTIVE` or `RESERVED`. Default to `PAUSED`.",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.Map,
        "tags",
        "A map of tags to assign to the resource. .If configured with a provider `default_tags` configuration block present, tags with matching keys will overwrite those defined at the provider-level.",
        InputType_Map_GetTypes(),
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "description",
        "A description of the queue",
        [],
        false,
        false,
      ),
      new DynamicUIProps(
        InputType.String,
        "name",
        "A unique identifier describing the queue",
        [],
        false,
        true,
      ),
    ];
  }
}
