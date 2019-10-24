function masquer_div(id)
{
  if (document.getElementById(id).style.display == 'none')
  {
       document.getElementById(id).style.display = 'block';
  }
  else 
  {
       document.getElementById(id).style.display = 'none';
  }
}

function yesno(arg)
{
  if(arg) return "oui";
  return "non";
}
