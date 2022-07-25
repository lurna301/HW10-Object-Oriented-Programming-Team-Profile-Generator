const Engineer = require('../lib/Engineer')


    describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constructor arguments", () => {
            //Arrange
            const github = 'lurna301';

            //Act
            
            const engineer = new Engineer("Alice", 1, "test@test.com", github);

            //Assert
            expect(engineer.github).toBe(github);
        });
    });

    describe("Getter methods", () => {
        it("should get github number via getGithub()", () => {
            //Arrange
            const github = 'lurna301';

            //Act
            
           const engineer = new Engineer("Alice", 1, "test@test.com", github);
           const engineerGithub = engineer.getGithub();

           //Assert
           expect(engineer.github).toBe(github);
        }); 

        it("should get role via getRole()", () => {
            //Arrange
            const role = "Engineer";

            //Act
            const engineer = new Engineer("Alice", 100, "test@test.com", "lurna301");
            const engineerRole = engineer.getRole()

            //Assert
            expect(engineerRole).toBe(role);
        });      
    });
});