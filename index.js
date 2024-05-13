function receivesAFunction(callback)
{
    callback();
}
function returnsANamedFunction()
{
    return function namedFunction()
    {
      return;  
    }
} 
const namedFunction = returnsANamedFunction();
    namedFunction();

    function returnsAnAnonymousFunction()
    {
        return function()
        {
            
        }
    }