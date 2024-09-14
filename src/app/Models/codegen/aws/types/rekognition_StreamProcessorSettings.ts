import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_StreamProcessorSettingsFaceSearch,
  rekognition_StreamProcessorSettingsFaceSearch_GetTypes,
} from "./rekognition_StreamProcessorSettingsFaceSearch";
import {
  rekognition_StreamProcessorSettingsConnectedHome,
  rekognition_StreamProcessorSettingsConnectedHome_GetTypes,
} from "./rekognition_StreamProcessorSettingsConnectedHome";

export interface rekognition_StreamProcessorSettings {
  // Input face recognition parameters for an Amazon Rekognition stream processor. See `face_search`.
  faceSearch?: rekognition_StreamProcessorSettingsFaceSearch;

  // Label detection settings to use on a streaming video. See `connected_home`.
  connectedHome?: rekognition_StreamProcessorSettingsConnectedHome;
}

export function rekognition_StreamProcessorSettings_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "faceSearch",
      "Input face recognition parameters for an Amazon Rekognition stream processor. See `face_search`.",
      () => rekognition_StreamProcessorSettingsFaceSearch_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Object,
      "connectedHome",
      "Label detection settings to use on a streaming video. See `connected_home`.",
      () => rekognition_StreamProcessorSettingsConnectedHome_GetTypes(),
      false,
      false,
    ),
  ];
}
