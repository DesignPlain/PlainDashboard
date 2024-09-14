import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";

export interface rekognition_StreamProcessorRegionsOfInterestPolygon {
  // The value of the X coordinate for a point on a Polygon.
  x?: number;

  // The value of the Y coordinate for a point on a Polygon.
  y?: number;
}

export function rekognition_StreamProcessorRegionsOfInterestPolygon_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Number,
      "x",
      "The value of the X coordinate for a point on a Polygon.",
      () => [],
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Number,
      "y",
      "The value of the Y coordinate for a point on a Polygon.",
      () => [],
      false,
      false,
    ),
  ];
}
