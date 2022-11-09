const chai = require("chai");
const chaiHttp = require("chai-http");

chai.should();
chai.use(chaiHttp);

const server = require("./../config/server");

require("./../config/routes")(server);

describe("Health Check", () => {
  describe("GET /status", () => {
    it("deve retornar HTTP 200 quando o app estiver operacional",(done)=>{
        chai.request(server)
        .get("/status")
        .end((err,res)=>{
            res.should.have.status(200);
            done();
        });
    });
  });
});
