export interface ServicePerimeterStatusVpcAccessibleServices {
  /*
Whether to restrict API calls within the Service Perimeter to the
list of APIs specified in 'allowedServices'.
*/
  EnableRestriction?: boolean;

  /*
The list of APIs usable within the Service Perimeter.
Must be empty unless `enableRestriction` is True.
*/
  AllowedServices?: Array<string>;
}
