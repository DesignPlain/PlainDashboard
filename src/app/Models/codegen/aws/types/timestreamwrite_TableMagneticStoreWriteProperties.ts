import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from '../../ds_base/InputType';
import { DynamicUIProps } from '../../ds_base/DynamicUIProps';
import {
  timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation,
  timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation_GetTypes,
} from './timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation';

export interface timestreamwrite_TableMagneticStoreWriteProperties {
  // The location to write error reports for records rejected asynchronously during magnetic store writes. See Magnetic Store Rejected Data Location below for more details.
  magneticStoreRejectedDataLocation?: timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation;

  // A flag to enable magnetic store writes.
  enableMagneticStoreWrites?: boolean;
}

export function timestreamwrite_TableMagneticStoreWriteProperties_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      'magneticStoreRejectedDataLocation',
      'The location to write error reports for records rejected asynchronously during magnetic store writes. See Magnetic Store Rejected Data Location below for more details.',
      () =>
        timestreamwrite_TableMagneticStoreWritePropertiesMagneticStoreRejectedDataLocation_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Bool,
      'enableMagneticStoreWrites',
      'A flag to enable magnetic store writes.',
      () => [],
      false,
      false,
    ),
  ];
}
