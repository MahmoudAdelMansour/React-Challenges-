function Recipe({drinkers})
{
    return (
      <ol>
          <li>Boil {drinkers} cups of water.</li>
          <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
          <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
      </ol>
    );
}

export default function RecipeShow()
{
    return (
        <section>
            <h1> Spiced Chai Recipe</h1>
            <h2>For two</h2>
            <Recipe drinkers={2} />
                <h2> For A Gathering</h2>
            <Recipe drinkers={4} />

        </section>
    );
}

/*
 Summary Of https://react.dev/learn/keeping-components-pure
    - In Arabic

 */
/*

    Fake Store , But Have A Button This Button Called Load More
    When I Click on this button i got new Elements visible

 */