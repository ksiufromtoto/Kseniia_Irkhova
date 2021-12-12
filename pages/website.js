const {Builder, By} = require("selenium-webdriver");

module.exports = class Website{
    constructor() {
        this.driver = new Builder().forBrowser("chrome").build();
    }
    async login() {
        await this.driver.get("https://opensource-demo.orangehrmlive.com/");
        await this.driver.findElement(By.name("txtUsername")).sendKeys("Admin");
        await this.driver.findElement(By.name("txtPassword")).sendKeys("admin123");
        await this.driver.findElement(By.id("btnLogin")).click();
    }
    async go_to_paygrades(){
        //-> admin
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[2]/ul/li[1]/a")).click();
        //-> jobs
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[2]/ul/li[1]/ul/li[2]/a"))
            .click();
        //-> paygrades
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[2]/ul/li[1]/ul/li[2]/ul/li[2]/a"))
            .click();
    }
    async add_user(name){
        //"add" button
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[1]/div/div[2]/form/div[1]/input[1]"))
            .click();
        //input name
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/form/fieldset/ol/li[1]/input[1]"))
            .sendKeys(name);
        //"save" button
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div/div[2]/form/fieldset/p/input[1]"))
            .click();
    }
    async assign_currency(curr, min, max){
        //"add currency" button
        await this.driver.findElement(By.id("btnAddCurrency")).click();
        //input currency name
        await this.driver.findElement(By.id("payGradeCurrency_currencyName"))
            .sendKeys(curr);
        //input min salary
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div[2]/form/fieldset/ol/li[2]/input"))
            .sendKeys(min);
        //input max salary
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div[2]/form/fieldset/ol/li[3]/input"))
            .sendKeys(max);
        //"save" button
        await this.driver.findElement(By.xpath("/html/body/div[1]/div[3]/div[2]/div[2]/form/fieldset/p/input[1]"))
            .click();
    }

    async check_name(name){
        if(await this.driver.findElement(By.xpath("//a[text()='" + name + "']")).isDisplayed()){
            return 1;
        }
    }

    async delete_user(name){
        await this.driver.findElement(By.xpath("//a[text()='" + name + "']/parent::*/preceding-sibling::*/input"))
            .click();
        await this.driver.findElement(By.id("btnDelete")).click();
        await this.driver.findElement(By.id("dialogDeleteBtn")).click();
    }
}