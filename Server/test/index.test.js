const app = require('../src/app');
const session = require('supertest');
const request = session(app);

const character = {
  id: 923,
  name: "dai",
  species:"Human",
  gender: "famele",
  status: "alive",
  origin: {
    name: "Earth (C-137"
  },
  image: "image.jpg"
};

describe("test de RUTAS", () => {
    describe("GET /rickandmorty/character/:id", () =>{
        it("responde con status: 200", async ()=>{
            await request.get("/rickandmorty/character/1").expect(200);
        });
        it("Respode un objeto con las propiedades: 'id', 'name', 'species', 'gender', 'status', 'origin', e 'image'", async()=>{
           const response = await request.get("/rickandmorty/character/1");
           for(const prop in character){
            expect(response.body).toHaveProperty(prop);
           }
           });
          
        
        it("si hay un error responde con status: 500", async ()=>{
          await request.get("/rickandmorty/character/3209j").expect(500)
    });
  });
  describe("GET /rickandmorty/login", ()=> {
    const access = {access: true};

    it("responde con un objeto con la propiedad access en en true si la informacion del usuario es valido", async ()=>{
      const response = await request.get("/rickandmorty/login?email=paez18730@gmail.com&password=1234567");
      expect(response.body).toEqual(access);
    });
    
    it("responde con un objeto con la propiedad access  en false si la informacion del usuario no es valida", async ()=>{
      const response= await request.get("/rickanmorty/login?email=paez18730@gmail.com&password=1234567)");
    });
  });
  describe("POST /rickandmorty/fav", () => {
    it("debe guardar el personaje en favoritos", async ()=> {
      const response= await request.post("/rickandmorty/fav").send(character);
      expect(response.body).toContainEqual(character);
    });
    it("debe agregar personajes favoritos sin eliminar los existentes", async ()=> {
      character.id = 1923;
      character.name = "FT 38b";
       await request.post("/rickandmodrty/fav").send(character)
      
    });
  });
   describe("DELETE / rickandmorty/fav/:id", ()=> {
    it("si el IDsolicitado no existe, deberia retornar un arreglo con todos los favoritos", async ()=> {
      await request.delete("/rickandmorty/fav/2gh56")
    });
    it("si el ID enviado existe, deberia eliminarlo de favoritos", async ()=> {
       await request.delete("/rickandmorty/fav/1923")
    })
   })
});
