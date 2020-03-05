class Developer{
    static descrition: string ="Full Stack Developer";
    static printData(){
        console.log(Developer.descrition); //Access member using class name instead of this.
    }
}
Developer.printData();
Developer.descrition ="We will do it";
Developer.printData();
