describe("Model", function(){

  describe("new", function(){
    var model;

    beforeEach(function(){
      model = new Model();
    });

    it("has a default options object", function(){
      expect(model.options).toEqual({});
    });

  });

  beforeEach(function(){
    model = new Model({name: 'Sparky'});
  });

  describe("get", function(){

    it("is a method", function(){
      expect(typeof model.get).toEqual("function");
    });

    it("returns the property", function(){
      var name = model.get('name')
      expect(name).toEqual('Sparky');
    });

  });

  describe("set", function(){

    it("is a method", function(){
      expect(typeof model.set).toEqual("function");
    });

    it("sets the property on the model", function(){
      model.set({age: 32});
      expect(model.get("name")).toBe("Sparky");
      expect(model.get("age")).toBe(32);
      expect(model.name).toBe(undefined);
    });


  });


});
