import { WorkstationConfigHostGceInstance } from "./WorkstationConfigHostGceInstance";

export interface WorkstationConfigHost {
  /*
A runtime using a Compute Engine instance.
Structure is documented below.
*/
  GceInstance?: WorkstationConfigHostGceInstance;
}
