import {
  InputType,
  InputType_String_GetTypes,
  InputType_Number_GetTypes,
  InputType_Map_GetTypes,
} from "../../ds_base/InputType";
import { DynamicUIProps } from "../../ds_base/DynamicUIProps";
import {
  rekognition_StreamProcessorRegionsOfInterestBoundingBox,
  rekognition_StreamProcessorRegionsOfInterestBoundingBox_GetTypes,
} from "./rekognition_StreamProcessorRegionsOfInterestBoundingBox";
import {
  rekognition_StreamProcessorRegionsOfInterestPolygon,
  rekognition_StreamProcessorRegionsOfInterestPolygon_GetTypes,
} from "./rekognition_StreamProcessorRegionsOfInterestPolygon";

export interface rekognition_StreamProcessorRegionsOfInterest {
  // Box representing a region of interest on screen. Only 1 per region is allowed. See `bounding_box`.
  boundingBox?: rekognition_StreamProcessorRegionsOfInterestBoundingBox;

  // Shape made up of up to 10 Point objects to define a region of interest. See `polygon`.
  polygons?: Array<rekognition_StreamProcessorRegionsOfInterestPolygon>;
}

export function rekognition_StreamProcessorRegionsOfInterest_GetTypes(): DynamicUIProps[] {
  return [
    new DynamicUIProps(
      InputType.Object,
      "boundingBox",
      "Box representing a region of interest on screen. Only 1 per region is allowed. See `bounding_box`.",
      () => rekognition_StreamProcessorRegionsOfInterestBoundingBox_GetTypes(),
      false,
      false,
    ),
    new DynamicUIProps(
      InputType.Array,
      "polygons",
      "Shape made up of up to 10 Point objects to define a region of interest. See `polygon`.",
      () => rekognition_StreamProcessorRegionsOfInterestPolygon_GetTypes(),
      true,
      false,
    ),
  ];
}
