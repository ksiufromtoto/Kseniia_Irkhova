const Website = require("../pages/website");
var page = new Website();
var name = "Ksiu";

describe("Orange HRM", function (){

    it("Login", function (){
        expect(async function (){
            await page.login();
        }).not.toThrow();
    });

    it('Create user "Ksiu"', function () {
        expect(async function (){
            await page.go_to_paygrades();
            await page.add_user("Ksiu");
            await page.assign_currency("UAH - Ukraine Hryvnia", "30000", "45000");
        }).not.toThrow();
    });

    it('Delete user "Ksiu"', function () {
        expect(async function(){
            await page.go_to_paygrades();
            if(await page.check_name("Ksiu")){
                await page.delete_user("Ksiu");
            }
        }).not.toThrow();
    });
});