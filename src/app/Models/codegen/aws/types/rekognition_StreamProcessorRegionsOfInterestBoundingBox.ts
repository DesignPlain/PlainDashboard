import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rekognition_StreamProcessorRegionsOfInterestBoundingBox {
  // Height of the bounding box as a ratio of the overall image height.
  height?: number;

  // Left coordinate of the bounding box as a ratio of overall image width.
  left?: number;

  // Top coordinate of the bounding box as a ratio of overall image height.
  top?: number;

  // Width of the bounding box as a ratio of the overall image width.
  width?: number;
}

export function rekognition_StreamProcessorRegionsOfInterestBoundingBox_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "height",
      "Height of the bounding box as a ratio of the overall image height.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "left",
      "Left coordinate of the bounding box as a ratio of overall image width.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "top",
      "Top coordinate of the bounding box as a ratio of overall image height.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "width",
      "Width of the bounding box as a ratio of the overall image width.",
      () => [],
      false,
      false,
    ),
  ];
}
