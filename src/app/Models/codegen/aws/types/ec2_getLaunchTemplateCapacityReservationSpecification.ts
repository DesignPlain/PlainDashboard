import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget,
  ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes,
} from './ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget';

export interface ec2_getLaunchTemplateCapacityReservationSpecification {
  //
  capacityReservationPreference?: string;

  //
  capacityReservationTargets?: Array<ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget>;
}

export function ec2_getLaunchTemplateCapacityReservationSpecification_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.String,
      'capacityReservationPreference',
      '',
      () => [],
      true,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      'capacityReservationTargets',
      '',
      () =>
        ec2_getLaunchTemplateCapacityReservationSpecificationCapacityReservationTarget_GetTypes(),
      true,
      false,
    ),
  ];
}
