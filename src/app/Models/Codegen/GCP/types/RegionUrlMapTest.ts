export interface RegionUrlMapTest {
  // Description of this test case.
  Description?: string;

  // Host portion of the URL.
  Host?: string;

  // Path portion of the URL.
  Path?: string;

  // A reference to expected RegionBackendService resource the given URL should be mapped to.
  Service?: string;
}
