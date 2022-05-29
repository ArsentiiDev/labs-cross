export const hasPairNumber = (a: number, b: number, c: number): boolean  =>  {

    if(a % 2 === 0 || b % 2 ===0 || c % 2 ===0) {
        return true;
    } else {
        return false
    }
}