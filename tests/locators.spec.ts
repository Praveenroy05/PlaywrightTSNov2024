// Locators - To identify the element on the page is known as locating an element.

// 1. css selector
// 2. xpath
// 3. Playwright specific getBy locators method - 

// 1. css selectors

/**
 *  css selector
 * 
 * 1. if ID is present we can use the below css selestor for locators:
 * 
 * tagname#idvalue or #idvalue
 * 
 * Ex: - if tagname is input and id is username
 * input#username OR #username
 * 
 * 2. if class attribute is present we can use the below selectors:
 * 
 * tagname.classname or .classname
 * 
 * 
 * Ex: - if tagname is input and classname is user
 * input.user OR .user
 * 
 * 3. Write css based on any attribute:
 * 
 * [attribute = 'value'] - Ex: - [type='username'] // [value="Login"]
 * 
 * tagname[attribute = 'value']
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parenttagname childtagname
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * 
 * .form-group input[id='userEmail']
 * 
 * 5. By writing the locators based on the test:
 * 
 * Ex: - ("text= Add to cart") // ("text= Email") 
 * 
 * ('text=Password')
 * 
 * 
 */


// 2. xpath

//  /
// //


// * or tagName[]

1. //*[@attribute='value']

//*[@id='userEmail']

2. //tagname[@attribute='value']

//input[@id='userEmail']

3. // Parent to child

//div[@class='form-group']/input[@id='userEmail'] 

//OR

//div[@id='form']//input[@id='username']

4. //label[@for='email']/following-sibling::input[@id='userEmail']

5. //input[@id='userEmail']/preceding-sibling::label

6. //tagname[text() = 'textvalue']


//3. Playwright GetBy Locators

/*

page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).




*/




/*
1. Launch 
Enter the text








*/



