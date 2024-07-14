import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "src/app/enum/InputType";
import { DynamicUIProps } from 'src/app/components/resource-config/DynamicUIProps';

export interface codecatalyst_getDevEnvironmentPersistentStorage {
  //
  size?: number;
}

export function codecatalyst_getDevEnvironmentPersistentStorage_GetTypes(): DynamicUIProps[] {
  return [new DynamicUIProps(InputType.Number, "size", "", [], true, false)];
}
