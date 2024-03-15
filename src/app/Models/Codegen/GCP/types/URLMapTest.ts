export interface URLMapTest {
  // Description of this test case.
  Description?: string;

  // Host portion of the URL.
  Host?: string;

  // Path portion of the URL.
  Path?: string;

  // The backend service or backend bucket link that should be matched by this test.
  Service?: string;
}
