describe('the App module', () => {
  
  it('test1', () => {
    expect(158).toEqual(157);
  });
  
   it('test2', () => {
    expect(15).toEqual(15);
  });
  /*
  var sut, mockedRouter;

  beforeEach(() => {
    mockedRouter = new RouterStub();
    sut = new App();
    sut.configureRouter(mockedRouter, mockedRouter);
  });

  it('contains a router property', () => {
    expect(sut.router).toBeDefined();
  });

  it('configures the router title', () => {
    expect(sut.router.title).toEqual('Aurelia');
  });

  it('should have a welcome route', () => {
    expect(sut.router.routes).toContain({ route: ['','welcome'], name: 'welcome',  moduleId: 'welcome', nav: true, title:'Welcome' });
  });

  it('should have a users route', () => {
     expect(sut.router.routes).toContain({ route: 'users', name: 'users', moduleId: 'users', nav: true, title:'Github Users' });
  });

  it('should have a child router route', () => {
    expect(sut.router.routes).toContain({ route: 'child-router', name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' });
  });
  */
});