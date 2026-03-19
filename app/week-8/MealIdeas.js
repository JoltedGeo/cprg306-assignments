"use client"
import { useState } from "react";
import { useEffect } from "react";

async function fetchMealIdeas(ingredient) {
    try {
        // Encode ingredient to ensure it's safe for use in a URL
        const encodedIngredient = encodeURIComponent(ingredient.trim());
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodedIngredient}`);
        // Check if the response is successful
        if (!response.ok) {
            throw new Error(`API error: ${response.status}`);
        }
        // Parse the JSON response and return the meals array
        const data = await response.json();
        return data.meals || [];
    } 
    // Handle any errors that occur during the fetch operation
    catch (error) {
        console.error("Error fetching meal ideas:", error);
        return [];
    }
}

function loadMealIdeas(ingredient, setMeals) {
    fetchMealIdeas(ingredient)
        .then((meals) => setMeals(meals || []));
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    //Use the useEffect Hook Use the useEffect hook to call loadMealIdeas whenever the ingredient prop changes.
    useEffect(() => {
        if (ingredient) {
            loadMealIdeas(ingredient, setMeals);
        }
    }, [ingredient]);

    // Render the meal ideas
    //Finally, define your component's render method. This should return a div that includes a header and a list of meals. Each meal should be a list item that displays the meal's name.

    return (
        <div className="w-full">
        {/* Header outside the scroll box */}
        <h2 className="text-lg font-semibold mb-2 text-purple-600 animate-pulse">
            Meal Ideas:
        </h2>

        {/* Scrollable box
        If theres no ingredient selected, show a message prompting the user to select an ingredient
        */}
        <div className="bg-black p-4 rounded-lg h-128 overflow-y-auto border-2 border-purple-600 purple-scrollbar">
            {!ingredient ? (
                <p className="text-purple-400 italic">
                Please select an ingredient to show meal ideas.
                </p>
            ) : meals.length === 0 ? (
                <p className="text-purple-400 italic">
                No meal ideas for this ingredient.
                </p>
            ) : (
            <ul className="grid grid-cols-3 gap-2">
                {meals.map((meal) => (
                <li key={meal.idMeal} className="border border-purple-600 text-white p-2 rounded-lg">
                    {meal.strMeal}
                </li>
                ))}
            </ul>
        )}
        </div>
    </div>
    );
}