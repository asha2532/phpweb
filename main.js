const topics = {
    topic1: {
      title: "Introduction to PHP",
      description: `<main>
    <h1 id="Introduction to PHP">Introduction to PHP</h1>

    <h2 id="What is PHP?">What is PHP?</h2>
    <p>
        PHP (Hypertext Preprocessor) is a popular server-side scripting language for web development. It is widely used for creating dynamic web pages and web applications.
    </p>

    <h2 id="Features of PHP">Features of PHP</h2>
    <ul>
        <li>Simple and easy to learn.</li>
        <li>Open-source and free.</li>
        <li>Platform-independent.</li>
        <li>Supports various databases.</li>
        <li>Extensive community support.</li>
    </ul>

    <h2 id="Embedding PHP Code in Web Pages">Embedding PHP Code in Web Pages</h2>
    <p>
        PHP code can be embedded directly into HTML files to create dynamic web pages. PHP scripts are enclosed within special tags, typically <span>&lt;?php</span> for the opening tag and <span>?&gt;</span> for the closing tag. Here's an example of embedding PHP code to display the current date and time:
    </p>

    <div class="code">
        <pre>&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Dynamic Web Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to our website!&lt;/h1&gt;
    &lt;p&gt;
        The current date and time is:
        &lt;?php
            echo date('Y-m-d H:i:s');
        ?&gt;
    &lt;/p&gt;
    &lt;p&gt;More dynamic content goes here.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/intro1.png" alt="">
    </div>

<p>
    In the example above, the PHP code between the <span>&lt;?php</span> and <span>?&gt;</span> tags is used to generate and display the current date and time. When the page is loaded in a web browser, the PHP code is executed on the server, and the result is sent to the client's browser as part of the HTML response.
</p>

    <h2 id="Printing in PHP">Printing in PHP</h2>
    <p>
        You can print in PHP whose syntax is like this: <span>echo "Hello, PHP!";</span>
    </p>
    <p>Here's an example of a simple PHP script that displays a message:</p>
    <div class="code">
        <pre>&lt;?php
$message = "Hello, PHP!";
echo $message;
?&gt;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/intro2.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        This webpage provides a brief introduction to PHP, highlighting its features and syntax. PHP is a powerful language for web development, and understanding its fundamentals is essential for building dynamic web applications.
    </p>

</main>`
    },
    topic2: {
      title: "Web Applications",
      description: `<main>
    <h1 id="Web Applications">Web Applications</h1>
    <ul>
      <li>
        Web applications are software programs that run on web servers and are
        accessed by users over the internet through a web browser.
      </li>

      <li>
        They dynamically generate web pages and content instead of serving
        static HTML files. This allows for more interactive and customizable
        experiences.
      </li>

      <li>
        Common examples include web-based email, social media sites, shopping
        carts, banking portals, wikis, blogs, online games, and countless other
        apps powered by the web.
      </li>

      <li>
        Web apps handle user input through web page forms, clicks, and other
        actions that get sent to the server. The server processes the requests
        and returns new page content.
      </li>

      <li>
        Web apps involve web development using languages like HTML, CSS,
        JavaScript on the front-end and languages like PHP, Python, Java, .NET
        on the back-end.
      </li>

      <li>
        Typical web app architecture has a client-server model with a front-end
        UI, back-end database/logic, and HTTP protocol for communication.
      </li>

      <li>
        Web apps can range from simple static sites to complex single-page apps
        that rely heavily on asynchronous communication and dynamic updating.
      </li>

      <li>
        Common challenges in web app development include state management,
        real-time synchronization, security, and optimizing performance.
      </li>

      <li>
        Popular frameworks like React, Angular, Django, Rails provide structures
        to help build and deploy robust web apps efficiently.
      </li>

      <li>
        Web apps are ubiquitous due to cross-platform accessibility, efficient
        delivery over HTTP, and ability to update codebase centrally on the
        server.
      </li>
    </ul>

    <h2 id="Benefits of Web Applications">Benefits of Web Applications</h2>
    <ul>
      <li>Platform-independent access via a web browser.</li>
      <li>
        Easy maintenance and updates, as changes are made on the server side.
      </li>
      <li>
        Global accessibility, allowing users to access applications from
        anywhere.
      </li>
      <li>Centralized data storage and management.</li>
    </ul>

    <h2 id="Limitations of Web Applications">Limitations of Web Applications</h2>
    <ul>
      <li>Dependent on internet connectivity.</li>
      <li>Potential security vulnerabilities if not properly secured.</li>
      <li>
        Performance may be affected by server load and network congestion.
      </li>
      <li>Compatibility issues across different web browsers.</li>
    </ul>

    <h2 id="Scripting">Scripting</h2>
    <ol>
        <li><span>Client-Side Scripting : </span>
            <ul>
                <li>Runs in the web browser on the user's device, not on the web server.</li>
                <li>Typically uses JavaScript to dynamically manipulate DOM, handle user, validate input, update UI, etc.</li>
                <li>Can improve performance by avoiding unnecessary server requests.</li>
                <li>But cannot directly access server resources like databases</li>.
            </ul>
        </li>
        <li><span>Server-Side Scripting : </span>
            <ul>
                <li>Runs on the web server before page is sent to the user's browser.</li>
                <li>
                    Common languages include PHP, Python, Ruby, ASP.NET.
                    Can access databases, file systems, external APIs on the server.
                </li>
                <li>Dynamically generates HTML, CSS, JavaScript sent to client.</li>
                <li>Handles core application logic, computations, security.</li>
                <li>Enables dynamic, database-driven web applications.</li>
            </ul>
        </li>
    </ol>

    <h2 id="Web Servers">Web Servers</h2>
    <p>Web applications can run on both local and remote web servers:</p>
    <ul>
      <li>
        <strong>Local Web Server:</strong> Used for development and testing on a
        local machine (e.g., XAMPP, WampServer).
      </li>
      <li>
        <strong>Remote Web Server:</strong> Hosts web applications on the
        internet, making them accessible globally.
      </li>
    </ul>

    <h2 id="Static and Dynamic Websites">Static and Dynamic Websites</h2>
    <p>Web applications can be categorized as static or dynamic:</p>
    <ul>
      <li>
        <strong>Static Websites:</strong> Content remains the same for all
        users. HTML and CSS are used for presentation.
      </li>
      <li>
        <strong>Dynamic Websites:</strong> Content changes based on user
        interactions and data from databases. PHP, along with other server-side
        technologies, enables dynamic web applications.
      </li>
    </ul>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
      Web applications powered by PHP offer numerous benefits, such as global
      accessibility and easy maintenance, while also presenting challenges like
      security and performance considerations. Understanding client-side and
      server-side scripting, web server options, and the difference between
      static and dynamic websites is crucial for building successful web
      applications.
    </p>


</main>`
    },
    topic3: {
      title: "PHP Basics",
      description: `<main>
    <h1 id="PHP Basics">PHP Basics</h1>

    <h2 id="Tokens">Tokens</h2>
    <p>
        PHP code consists of various tokens, including keywords, identifiers, constants, strings, and operators. These tokens are the building blocks of PHP scripts.
    </p>

    <h2 id="Variables">Variables</h2>
    <p>
        Variables in PHP are used to store data. They start with a dollar sign (<span>$</span>) followed by an identifier. PHP variables are case-sensitive.
    </p>
    <div class="code">
        <pre>$variable_name = "Hello, PHP!";</pre>
    </div>

    <h2 id="Scope of Variables">Scope of Variables</h2>
    <p>
        PHP variables have different scopes:
    </p>
    <ul>
        <li><span>Local scope:</span> Variables declared within a function.</li>
        <li><span>Global scope:</span> Variables declared outside functions.</li>
        <li><span>Static scope:</span> Variables within a function that retain their values between function calls.</li>
    </ul>

    <h2 id="Constants">Constants</h2>
    <p>
        Constants are used to store values that cannot be changed. They are defined using the <span>define()</span> function.
    </p>
    <div class="code">
        <pre>define("PI", 3.14159);</pre>
    </div>

    <h2 id="Operators">Operators</h2>
    <p>
        PHP supports various operators, including arithmetic, assignment, comparison, logical, and more.
    </p>
    <div class="code">
        <pre>$x = 10;
$y = 5;
$sum = $x + $y; // Addition operator</pre>
    </div>

    <h2 id="Data Types">Data Types</h2>
    <p>
        In PHP, data types specify the type of data that can be stored in a variable. PHP supports several data types, each designed for handling specific types of information. Here are some of the most common data types in PHP:
    </p>

    <ul>
        <li><strong>Integer:</strong> Integer data type represents whole numbers. Example:
            <div class="code">
                <pre>$age = 30;</pre>
            </div>
        </li>

        <li><strong>Float:</strong> Float data type, also known as floating-point or double, represents numbers with decimal points. Example:
            <div class="code">
                <pre>$price = 19.99;</pre>
            </div>
        </li>

        <li><strong>String:</strong> String data type represents sequences of characters, such as text. Example:
            <div class="code">
                <pre>$name = "John";</pre>
            </div>
        </li>

        <li><strong>Array:</strong> Array data type is used to store collections of values, such as lists or associative arrays. Example:
            <div class="code">
                <pre>$fruits = array("apple", "banana", "cherry");</pre>
            </div>
        </li>

        <li><strong>Object:</strong> Object data type is used to create custom data structures and classes. Example:
            <div class="code">
                <pre>class Person {
    public $name;
    public $age;
}

$person = new Person();
$person-&gt;name = "Alice";
$person-&gt;age = 25;</pre>
            </div>
        </li>

        <li><strong>Boolean:</strong> Boolean data type represents true or false values. Example:
            <div class="code">
                <pre>$flag = true;</pre>
            </div>
        </li>
    </ul>

    <p>
        Understanding and correctly using data types in PHP is essential for effective programming and data manipulation in your web applications.
    </p>

    <h2 id="Number Handling">Number Handling</h2>
    <p>
        PHP provides functions for number handling, such as <span>intval()</span> and <span>floatval()</span> for converting between data types.
    </p>
    <div class="code">
        <pre>$number = "123";
$int_number = intval($number); // Convert to integer</pre>
    </div>

    <h2 id="Comments">Comments</h2>
    <p>
        Comments in PHP can be used to explain code and are not executed. Single-line comments start with <span>//</span>, and multi-line comments are enclosed in <span>/* */</span>.
    </p>
    <div class="code">
        <pre>// This is a single-line comment

/*
    This is a multi-line comment
    It can span multiple lines
*/</pre>
    </div>

    <h2 id="Echo and Print Statements">Echo and Print Statements</h2>
    <p>
        PHP uses <span>echo</span> and <span>print</span> statements to output data to the browser.
    </p>
    <div class="code">
        <pre>$name = "Duniya";
echo "Namaste " . $name;</pre>
    </div>

    <p>Output :</p>
    
    <div class="output">
        <img src="img/phpimg/basics-echo.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        This webpage has provided an overview of essential PHP basics, including tokens, variables, scope of variables, constants, operators, data types, number handling, comments, and the use of echo and print statements. Understanding these fundamental concepts is crucial for building dynamic and interactive web applications with PHP. As you continue your PHP journey, you'll explore more advanced topics and gain proficiency in web development.
    </p>
</main>`
    },
    topic4: {
      title: "Control Structures in PHP",
      description: `<main>
    <h1 id="Control Structures in PHP">Control Structures in PHP</h1>

    <h2 id="Conditional Statements">Conditional Statements</h2>
    <p>
        Conditional statements in PHP allow you to make decisions in your code based on certain conditions. PHP supports several conditional statements:
    </p>
    <ul>
        <li><strong>If else Statement:</strong> Executes code if a specified condition is true otherwise else will be executed. Only if can be used. Example:
            <div class="code">
                <pre>$age = 22;
if ($age &lt; 18) {
    echo "You are under 18.";
} else if ($age &lt; 30) {
    echo "You are under 30.";
} else {
    echo "You are 18 or older.";
}</pre>
            </div>

            <p>Output :</p>
    
            <div class="output">
                <img src="img/phpimg/control-if.png" alt="">
            </div>
        </li>

        <li><strong>Switch Statement:</strong> Evaluates a value against multiple possible cases. Example:
            <div class="code">
                <pre>$day = "Monday";
switch ($day) {
    case "Monday":
        echo "It's Monday!";
        break;
    case "Tuesday":
        echo "It's Tuesday!";
        break;
    // Other cases...
}</pre>
            </div>

            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/control-switch.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="Looping Statements">Looping Statements</h2>
    <p>
        Looping statements in PHP allow you to execute a block of code repeatedly. PHP supports several looping statements:
    </p>
    <ul>
        <li><strong>For Loop:</strong> Executes code a specified number of times. Example:
            <div class="code">
                <pre>for ($i = 0; $i &lt; 5; $i++) {
    echo "Iteration: $i &lt;br&gt;";
}</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/control-for.png" alt="">
            </div>
        </li>

        <li><strong>While Loop:</strong> Executes code while a specified condition is true. Example:
            <div class="code">
                <pre>$counter = 0;
while ($counter &lt; 3) {
    echo "Iteration: $counter &lt;br&gt;";
    $counter++;
}</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/control-while.png" alt="">
            </div>
        </li>

        <li><strong>Do-While Loop:</strong> Executes code at least once and continues as long as a specified condition is true. Example:
            <div class="code">
                <pre>$counter = 0;
do {
    echo "Iteration: $counter &lt;br&gt;";
    $counter++;
} while ($counter &lt; 6);</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/control-dowhile.png" alt="">
            </div>
        </li>

        <li><strong>Foreach Loop:</strong> Iterates over elements in an array or other iterable objects. Example:
            <div class="code">
                <pre>$colors = array("red", "green", "blue");
foreach ($colors as $color) {
    echo "Color: $color &lt;br&gt;";
}</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/control-foreach.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="File Inclusion Statements">File Inclusion Statements</h2>
    <p>
        File inclusion statements in PHP allow you to include external PHP files into your current script. This can be useful for modularizing code and reusing functions and variables.
    </p>
    <ul>
        <li><strong>Include Statement:</strong> Includes a file and continues execution even if the file is not found. Example:
            <div class="code">
                <pre>include("header.php");
include("footer.php");</pre>
            </div>
        </li>

        <li><strong>Require Statement:</strong> Includes a file and terminates execution if the file is not found. Example:
            <div class="code">
                <pre>require("config.php");
require("functions.php");</pre>
            </div>
        </li>
    </ul>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Control structures are essential elements of PHP programming that allow you to make decisions, repeat tasks, and include external code. By mastering conditional statements, looping statements, and file inclusion statements, you gain the ability to create dynamic and interactive web applications. Understanding when and how to use these control structures is a fundamental skill for PHP developers.
    </p>
</main>`
    },
    topic5: {
      title: "Functions",
      description: `<main>
    <h1 id="Functions">Functions</h1>

    <h2 id="What is a Function?">What is a Function?</h2>
    <p>
        A function in PHP is a block of code that can be called and executed multiple times. Functions are used to encapsulate a set of actions, making code more organized, reusable, and easier to maintain.
    </p>

    <h2 id="Arguments (Formal and Actual)">Arguments (Formal and Actual)</h2>
    <p>
        Functions can accept parameters, known as formal parameters or arguments. When a function is called, you provide actual values for these arguments.
    </p>
    <div class="code">
        <pre>function greet($name) {
    echo "Hello, $name!";
}
greet("John");</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-args.png" alt="">
    </div>
    <p>So in this example, <span>John</span> is actual paramerter and <span>$name</span> is formal parameter</p>

    <h2 id="Return Value">Return Value</h2>
    <p>
        Functions can return values using the <span>return</span> statement. The returned value can be used in other parts of the code.
    </p>
    <div class="code">
        <pre>function add($a, $b) {
    return $a + $b;
}
$result = add(5, 3); // $result will be 8</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-return.png" alt="">
    </div>

    <h2 id="Default Values">Default Values</h2>
    <p>
        You can specify default values for function arguments. If no value is provided when calling the function, the default value is used.
    </p>
    <div class="code">
        <pre>function greet($name = "Guest") {
    echo "Hello, $name!";
}
greet(); // $result will be "Hello, Guest!"</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-default.png" alt="">
    </div>

    <h2 id="Dynamic Function Calling">Dynamic Function Calling</h2>
    <p>
        PHP allows you to call functions dynamically using variable functions and the <span>call_user_func</span> function.
    </p>
    <div class="code">
        <pre>$functionName = "greet";
$functionName("Manjit"); // Calls the greet function</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-dfc.png" alt="">
    </div>

    <h2 id="Call by Value and Reference">Call by Value and Reference</h2>
    <p>
        By default, PHP uses call by value, which means function arguments are copies of the original values. To pass arguments by reference, you can use the <span>&amp;</span> symbol.
    </p>
    <div class="code">
        <pre>function increment($num) {
    $num++;
}
function incrementByReference(&amp;$num) {
    $num++;
}
$value = 5;
echo "Value before function calling = $value &lt;br&gt;";

increment($value); // $value remains 5
echo "Value after call by value = $value &lt;br&gt;";

incrementByReference($value); // $value becomes 6
echo "Value after call by reference = $value &lt;br&gt;";</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-callby.png" alt="">
    </div>

    <h2 id="Function and Variable Scope">Function and Variable Scope</h2>
    <p>
        PHP has different scopes for variables: local, global, and static. Variables declared inside a function are local by default.
    </p>
    <div class="code">
        <pre>$globalVar = 10;
function myFunction() {
    $localVar = 20;
}
echo $globalVar; // Accessible
echo $localVar; // Not accessible (undefined)</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-scope.png" alt="">
    </div>

    <h2 id="Recursion">Recursion</h2>
    <p>
        Recursion is a technique where a function calls itself. It's often used to solve problems that can be broken down into smaller, similar sub-problems.
    </p>
    <div class="code">
        <pre>function factorial($n) {
    if ($n === 0) { return 1; } 
    else { return $n * factorial($n - 1); }
}
$fact = factorial(5);
echo $fact;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-recursion.png" alt="">
    </div>

    <h2 id="Library Functions">Library Functions</h2>
    <p>
        PHP provides a wide range of built-in library functions for various tasks, such as string manipulation, file handling, and more. These functions can be used in your PHP scripts to perform common operations. For e.g.
    </p>
    <div class="code">
        <pre>$length = strlen("Hello, PHP!");
echo $length;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/function-library.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Functions are a fundamental part of PHP programming, allowing you to structure your code, make it reusable, and improve maintainability. By understanding function arguments, return values, scope, recursion, and the use of library functions, you can become a more proficient PHP developer.
    </p>

</main>`
    },
    topic6: {
      title: "String Handling in PHP",
      description: `<main>
    <h1 id="String Handling in PHP">String Handling in PHP</h1>

    <h2 id="Creating and Accessing Strings">Creating and Accessing Strings</h2>
    <p>
        In PHP, you can create strings using single quotes ('') or double quotes (""). Accessing characters in a string is done using square brackets.
    </p>
    <div class="code">
        <pre>$singleQuoted = 'This is a single-quoted string';
$doubleQuoted = "This is a double-quoted string";

$character = $doubleQuoted[0];
echo "character is $character";</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-create.png" alt="">
    </div>

    <h2 id="Interpolation with Curly Braces">Interpolation with Curly Braces</h2>
    <p>
        You can interpolate variables and expressions within double-quoted strings using curly braces ({}) for readability.
    </p>
    <div class="code">
        <pre>$name = "Alice";
$greeting = "Hello, {$name}!";
echo $greeting;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-curly.png" alt="">
    </div>

    <h2 id="Characters and String Indexes">Characters and String Indexes</h2>
    <p>
        PHP treats strings as arrays of characters, allowing you to access individual characters by index.
    </p>
    <div class="code">
        <pre>$str = "PHP";
$firstChar = $str[0]; // 'P'
echo "first character is $firstChar";</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-index.png" alt="">
    </div>

    <h2 id="String Operators">String Operators</h2>
    <p>
        PHP provides various string operators for concatenation and manipulation, such as :
    </p>
    <ul>
        <li><span>Concatenation : </span> 
            <span>+</span> and <span>.</span> are used for concatenation.
            <div class="code">
                <pre>$str1 = "Hello";
$str2 = "World";
$combined = $str1 . " " . $str2;
echo $combined;</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/string-concat.png" alt="">
            </div>
        </li>
        <li><span>Concatenation assignment : </span>
            <span>+=</span> and <span>.=</span> are used for concatenation assignment.
            <div class="code">
                <pre>$str1 = "Hello";
$str2 = "World";
$str1 .= " " . $str2;
echo $str1;</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/string-concatassign.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="Heredoc">Heredoc</h2>
    <p>
        Heredoc is a way to define multi-line strings in PHP without the need for escape characters. It is particularly useful when you need to create large blocks of text or HTML content.
    </p>
    <div class="code">
        <pre>$variable = "PHP";
$heredocString = &lt;&lt;&lt;EOT
This is a Heredoc string. &lt;br&gt;
It supports multiple lines and variables: {$variable}
EOT;
echo $heredocString;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-heredoc.png" alt="">
    </div>

    <h2 id="String Functions">String Functions</h2>
    <p>
        PHP provides a wide range of string functions to manipulate, format, and search within strings. Here are some commonly used string functions:
    </p>
    <ul>
        <li><span>strlen($str)</span>: Returns the length of the string.
            <div class="code">
                <pre>$length = strlen("Hello, PHP!"); // 11</pre>
        </div>
        </li>
        <li><span>strtoupper($str)</span>: Converts the string to uppercase.
            <div class="code">
                <pre>$uppercase = strtoupper("Hello, PHP!"); // "HELLO, PHP!"</pre>
        </div>
        </li>

    <li><span>strtolower($str)</span>: Converts the string to lowercase.</li>
    <li><span>ucfirst($str)</span>: Converts the first character of the string to uppercase.</li>
    <li><span>substr($str, $start, $length)</span>: Extracts a substring from the given string.</li>
    <li><span>strpos($haystack, $needle)</span>: Searches for the position of a substring within a string.</li>
    <li><span>str_replace($search, $replace, $str)</span>: Replaces all occurrences of a search string with a replacement string.</li>
</ul>

    <h2 id="Formatting Strings">Formatting Strings</h2>
    <p>
        You can format strings using functions like <span>printf</span> and <span>sprintf</span> to control the output's appearance.
    </p>
    <div class="code">
        <pre>$name = "Alice";
$age = 25;
$message = sprintf("Name: %s, Age: %d", $name, $age);
echo $message;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-format.png" alt="">
    </div>

    <h2 id="Comparing and Searching Strings">Comparing and Searching Strings</h2>
    <p>
        PHP provides functions for comparing and searching within strings, such as <span>strcmp</span>, <span>strstr</span>, <span>strpos</span> and <span>str_replace</span>.
    </p>
    <div class="code">
        <pre>$haystack = "Hello, PHP!";
$needle = "PHP";
$position = strpos($haystack, $needle);
echo "Position = $position";</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/string-compare.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        String handling is a fundamental part of PHP programming, and understanding how to create, manipulate, and format strings is essential for building dynamic web applications. With the wide range of string functions available in PHP, you can perform various operations on strings to meet your application's requirements.
    </p>

</main>`
    },
    topic7: {
      title: "Arrays",
      description: `<main>
    <h1 id="Arrays">Arrays</h1>
    <p>
        An array in PHP is an ordered map that can store multiple values. Each value is associated with a unique key or index.
    </p>
    <div class="code">
        <pre>$fruits = array("apple", "banana", "cherry");</pre>
    </div>

    <h2 id="Creating and Types of Arrays">Creating and Types of Arrays</h2>
    <p>
        PHP supports different types of arrays:
    </p>
    <ul>
        <li><strong>Numeric/Indexed Arrays:</strong> Arrays with numeric keys (0, 1, 2, ...) and values. These arrays accessed by the indexes of the element.
            <div class="code">
                <pre>$numericArray = array("apple", "banana", "cherry");
echo $numericArray[1]; </pre>
            </div>
            <p>Output :</p>

            <div class="output">
                <img src="img/phpimg/array-index.png" alt="">
            </div>
        </li>

        <li><strong>Associative Arrays:</strong> Arrays with named keys and values.
            <div class="code">
                <pre>$assocArray = array("name" =&gt; "John", "age" =&gt; 30);
echo $assocArray["name"];</pre>
            </div>
            <p>Output :</p>
    
            <div class="output">
                <img src="img/phpimg/array-associative.png" alt="">
            </div>
        </li>

        <li><strong>Multidimensional Arrays:</strong> Arrays that contain other arrays as their elements or we can say array of arrays.
            <div class="code">
                <pre>$multidimensionalArray = array(
    array("apple", "banana"),
    array("cherry", "date")
);
echo $multidimensionalArray[1][0]; // $result will be cherry</pre>
            </div>
            <p>Output :</p>
    
            <div class="output">
                <img src="img/phpimg/array-multi.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="Accessing Arrays">Accessing Arrays</h2>
    <p>
        You can access array elements using loops or array functions:
    </p>
    <ul>
        <li><strong>Looping through Arrays:</strong> Use <span>foreach</span> to iterate through array elements.
            <div class="code">
                <pre>foreach ($fruits as $fruit) {
    echo "Fruit: $fruit";
}</pre>
            </div>
        </li>

        <li><strong>Array Functions:</strong> Functions like <span>current()</span>, <span>next()</span>, <span>prev()</span>, <span>reset()</span>, and <span>end()</span> can be used to manipulate the array pointer.
            <div class="code">
                <pre>$fruits = array("apple", "banana", "cherry");
echo current($fruits) . "&lt;br&gt;"; // "apple"
next($fruits); // Move pointer to the next element
echo current($fruits); // "banana"</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/array-functions.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="Inspecting Arrays">Inspecting Arrays</h2>
    <p>
        PHP provides functions to inspect arrays, such as <span>count()</span> and <span>array_key_exists()</span>.
    </p>
    <div class="code">
        <pre>$fruits = array("apple", "banana", "cherry");
$count = count($fruits); // 3
$hasKey = array_key_exists("banana", $fruits); // true</pre>
    </div>

    <p>Output :</p>
    
    <div class="output">
        <img src="img/phpimg/array-inspecting.png" alt="">
    </div>

    <h2 id="Deleting from Arrays">Deleting from Arrays</h2>
    <p>
        You can remove elements from arrays using functions like <span>unset()</span>.
    </p>
    <div class="code">
        <pre>$fruits = array("apple", "banana", "cherry");
unset($fruits[1]);
print_r($fruits);</pre>
    </div>

    <p>Output :</p>
    
    <div class="output">
        <img src="img/phpimg/array-delete.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Arrays are a fundamental data structure in PHP, allowing you to store and manipulate multiple values efficiently. Understanding the types of arrays, accessing and inspecting array elements, and performing array operations are essential skills for PHP developers.
    </p>

</main>`
    },
    topic8: {
      title: "Forms in PHP",
      description: `<main>
    <h1 id="Forms in PHP">Forms in PHP</h1>

    <h2 id="Form Controls">Form Controls</h2>
    <p>
        Forms in PHP allow users to submit data to a web server for processing. Common form controls include text
        fields, checkboxes, radio buttons, and buttons.
    </p>
    <div class="code">
        <pre>&lt;form action="process.php" method="post"&gt;
    &lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
    
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/form-controls.png" alt="">
    </div>

    <h2 id="Super Global Variables and Arrays">Super Global Variables and Arrays</h2>
    <p>
        PHP uses super global arrays to access form data and other server variables. Common super global arrays include:
    </p>
    <ul>
        <li><strong>$_GET:</strong> Contains data sent via HTTP GET method.
            <div class="code">
                <pre>// URL: example.com/index.php?name=John
$name = $_GET["name"]; // "John"</pre>
            </div>
        </li>

        <li><strong>$_POST:</strong> Contains data sent via HTTP POST method.
            <div class="code">
                <pre>// Form: &lt;input type="text" name="name"&gt;
$name = $_POST["name"]; // User input</pre>
            </div>
        </li>

        <li><strong>$_REQUEST:</strong> Contains data from both GET and POST methods.
            <div class="code">
                <pre>$name = $_REQUEST["name"]; // User input from GET or POST</pre>
            </div>
        </li>
    </ul>
    <p>
        You can use array functions like <span>isset()</span> and <span>empty()</span> to check if elements exist in
        these arrays.
    </p>
    <div class="code">
        <pre>if (isset($_POST["name"])) {
    $name = $_POST["name"];
    // Process the input
}</pre>
    </div>
    

    <h2 id="Importing and Accessing User Input">Importing and Accessing User Input</h2>
    <p>
        Importing and accessing user input from forms is a crucial part of web development. However, it's essential to
        validate and sanitize data to ensure security and data integrity.
    </p>
    <p>
        Here are steps to import and access user input safely:
    </p>
    <ol>
        <li><strong>Check if the input exists:</strong> Before using user input, check if it exists in the super global
            arrays to prevent undefined variable errors.
        </li>
        <li><strong>Sanitize and validate:</strong> Sanitize user input to remove potentially harmful characters, and
            validate it to ensure it meets expected criteria (e.g., email format, numeric values).
        </li>
    </ol>
    <div class="code">
        <pre>if (isset($_POST["name"]) &amp;&amp; isset($_POST["email"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    
    // Sanitize and validate email
    $email = filter_var($email, FILTER_SANITIZE_EMAIL);
    
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Process the validated input
    } else {
        // Handle invalid email
    }
} else {
    // Handle missing input
}</pre>
    </div>
    <p>
        Implementing these checks ensures that your PHP scripts handle user input securely and reliably.
    </p>


    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Forms are essential for user interaction on websites. PHP provides super global variables and arrays to easily
        handle and process user input. Understanding form controls and how to work with form data is crucial for
        building interactive web applications.
    </p>


</main>`
    },
    topic9: {
      title: "Integrating PHP and Databases",
      description: `<main>
    <h1 id="Integrating PHP and Databases">Integrating PHP and Databases</h1>

    <h2 id="Database Operations">Database Operations</h2>
    <p>
        Databases support a range of operations for managing data efficiently. Common database operations include:
    </p>
    <ul>
        <li><strong>Insertion:</strong> Adding new records to a database table.
        </li>
        <li><strong>Selection:</strong> Retrieving data from the database using queries.
        </li>
        <li><strong>Updation:</strong> Modifying existing records in the database.
        </li>
        <li><strong>Deletion:</strong> Removing records from the database.
        </li>
        <li><strong>Sorting:</strong> Arranging data in a specific order, such as ascending or descending.
        </li>
    </ul>
    <p>
        These operations are essential for maintaining and manipulating data in a database-driven application.
    </p>

    <h2 id="Database Packages">Database Packages</h2>
    <p>
        PHP offers support for various database systems through extensions like MySQLi and PDO (PHP Data Objects). These packages provide functions and classes to interact with databases, including popular database systems such as:
    </p>
    <ul>
        <li><strong>MySQL:</strong> An open-source relational database management system known for its performance and ease of use.
        </li>
        <li><strong>SQL Server:</strong> A database management system developed by Microsoft, commonly used in enterprise environments.
        </li>
        <li><strong>Oracle:</strong> A widely used, enterprise-level database management system known for its robustness and scalability.
        </li>
    </ul>

    <h2 id="MySQL with PHP">MySQL with PHP</h2>
    <p>
        MySQL is one of the most popular open-source relational database management systems. It is known for its performance, scalability, and ease of use. MySQL can be seamlessly integrated with PHP to create dynamic web applications. Here are some key points about using MySQL with PHP:
    </p>
    <ul>
        <li><strong>Database Connectivity:</strong> PHP provides extensions like MySQLi (MySQL Improved) and PDO (PHP Data Objects) that allow you to establish connections to MySQL databases.</li>
        <li><strong>Query Execution:</strong> You can execute SQL queries from your PHP code to interact with the MySQL database. This includes operations like selecting, inserting, updating, and deleting records.</li>
        <li><strong>Fetching Data:</strong> PHP provides various functions to fetch data returned by database queries. You can use functions like <span>mysqli_fetch_assoc()</span> to retrieve data in an associative array format.</li>
        <li><strong>Security:</strong> When working with MySQL and PHP, it's essential to implement security practices such as prepared statements and input validation to prevent SQL injection attacks.</li>
        <li><strong>Database Administration:</strong> MySQL databases can be administered using tools like phpMyAdmin, which provide a web-based interface for managing databases, tables, and data.</li>
    </ul>
    <p>
        The combination of PHP and MySQL is widely used in web development due to its flexibility, performance, and robust community support. It enables the creation of dynamic, data-driven websites and applications.
    </p>

    <h2 id="Connecting to a Database">Connecting to a Database</h2>
    <p>
        To connect to a database, you need to provide connection details such as the host, username, password, and database name. The connection can be established using functions like <span>mysqli_connect()</span> or <span>PDO</span>.
    </p>
    <div class="code">
        <pre>// Using MySQLi
$host = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";
$conn = mysqli_connect($host, $username, $password, $dbname);
if($conn) {
    echo "Connected to database";
} else {
    echo "Error: " . mysqli_connect_error();
}</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/database-connecting.png" alt="">
    </div>

    <h2 id="Creating a Database and Table">Creating a Database and Table</h2>
    <p>
        You can use SQL queries to create databases and tables. For example, to create a database named "mydb" and a table named "users," you can execute SQL statements like:
    </p>
    <div class="code">
        <pre>// Create database
$sql = "CREATE DATABASE mydb";

// Create table
$sql = "CREATE TABLE users (
id INT AUTO_INCREMENT PRIMARY KEY, 
username VARCHAR(50),
email VARCHAR(100)
)";</pre>
    </div>

    <h2 id="Making and Executing Queries">Making and Executing Queries</h2>
    <p>
        PHP allows you to execute SQL queries to interact with the database. For example, to insert data into the "users" table:
    </p>
    <div class="code">
        <pre>$query = "INSERT INTO users (username, email) VALUES ('john_doe', 'john@example.com')";

if(mysqli_query($conn, $query)){
    echo "Record inserted successfully";
} else {
    echo "Error: " . mysqli_error($conn);
}</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/database-query.png" alt="">
    </div>

    <h2 id="Fetching Data Sets">Fetching Data Sets</h2>
    <p>
        You can retrieve data from the database using queries and fetch methods provided by MySQLi or PDO. For example:
    </p>
    <div class="code">
        <pre>$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);

while ($row = mysqli_fetch_assoc($result)) {
    echo "Username: " . $row["username"] . ", Email: " . $row["email"];
}</pre>
    </div>

    <h2 id="Integrating Forms and Databases">Integrating Forms and Databases</h2>
    <p>
        You can create forms to collect user data and then use PHP to validate and store that data in the database. Here's a simplified example:
    </p>
    <div class="code">
        <pre>&lt;form action="process.php" method="post"&gt;
    &lt;label for="username"&gt;Username:&lt;/label&gt;
    &lt;input type="text" id="username" name="username"&gt;
    
    &lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;
    
    &lt;input type="submit" value="Submit"&gt;
&lt;/form&gt;</pre>
    </div>
    <p>In process.php file :</p>
    <div class="code">
        <pre>&lt;?php

// Configure database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

// Create connection
$conn = mysqli_connect($servername, $username, $password);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database if not exists
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
if (mysqli_query($conn, $sql)) {
    // Database created successfully
} else {
    echo "Error creating database: " . mysqli_error($conn);
} 

// Select database
mysqli_select_db($conn, $dbname); 

// Create users table if not exists 
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(100)
)";

if (mysqli_query($conn, $sql)) {
    // Table created successfully
} else {
    echo "Error creating table: " . mysqli_error($conn);
}

// Check if form is submitted
if (isset($_POST['username']) &amp;&amp; isset($_POST['email'])) {
    
    // Get form data
    $username =  $_POST['username'];
    $email = $_POST['email'];

    // Insert query
    $sql = "INSERT INTO users (username, email) VALUES ('$username', '$email')";

    // Execute query
    if (mysqli_query($conn, $sql)) {
    echo "Record inserted successfully";
    } else {
    echo "Error inserting record: " . mysqli_error($conn);
    }

}

// Close connection
mysqli_close($conn);

?&gt;</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/database-integrating.png" alt="">
        <img src="img/phpimg/database-integrating2.png" alt="">
        <img src="img/phpimg/database-integrating3.png" alt="">
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Integrating PHP and databases is fundamental for creating dynamic web applications. Understanding database operations, connection methods, SQL queries, and integrating forms with databases is essential for building robust and data-driven web solutions.
    </p>

</main>`
    },
    topic10: {
      title: "Cookies in PHP",
      description: `<main>
    <h1 id="Cookies in PHP">Cookies in PHP</h1>
    <p>
        Cookies are small pieces of data that can be stored on a user's device by a web server. They are commonly used to track user sessions, personalize content, and remember user preferences.
    </p>

    <h2 id="Setting Cookies">Setting Cookies</h2>
    <p>
        You can set cookies in PHP using the <span>setcookie()</span> function. Cookies have a name, value, and optional attributes such as expiration time and path. Syntax for setting cookie is :
    </p>
    <div class="code">
        <pre>setcookie(name, value, expire, path, domain, secure, httponly);</pre>
    </div>
    <p>For example :</p>
    <div class="code">
        <pre>setcookie("username", "john_doe", time() + 7 * 24 * 3600, "/");</pre>
    </div>
    <p>Set a cookie with a name, value, and expiration time (e.g., 7 days)</p>

    <h2 id="Retrieving Cookies">Retrieving Cookies</h2>
    <p>
        To retrieve cookies in PHP, you can use the <span>$_COOKIE</span> super global variable.
    </p>
    <div class="code">
        <pre>if (isset($_COOKIE["username"])) {
    $username = $_COOKIE["username"];
    echo "Welcome back, $username!";
} else {
    echo "Welcome, guest!";
}</pre>
    </div>
    <p>Output :</p>
    <p>if cookie is not set then,</p>
    <div class="output">
        <img src="img/phpimg/cookieNotSet.png" alt="">
    </div>
    <p>if cookie is set then,</p>
    <div class="output">
        <img src="img/phpimg/cookieSet.png" alt="">
    </div>

    <h2 id="Managing Cookies">Managing Cookies</h2>
    <p>
        Cookies can be modified or deleted using the <span>setcookie()</span> function with updated values or by setting an expiration time in the past.
    </p>
    <div class="code">
        <pre>// Update a cookie's value
setcookie("username", "new_value", time() + 7 * 24 * 3600, "/");

// Delete a cookie by setting an expiration time in the past
setcookie("username", "", time() - 3600, "/");</pre>
    </div>
    <p>Output for cookie updation :</p>
    <div class="output">
        <img src="img/phpimg/cookieUpdate.png" alt="">
    </div>

    <h2 id="Example: User Authentication">Example: User Authentication</h2>
    <p>
        Cookies are often used for user authentication. Here's a simplified example of using cookies for user login/logout:
    </p>
    <div class="code">
        <pre>if (isset($_POST["login"])) {
    // Check user credentials (e.g., username and password)
    if (valid_credentials($_POST["username"], $_POST["password"])) {
        // Set a cookie to remember the user
        setcookie("authenticated", "yes", time() + 7 * 24 * 3600, "/");
    }
}

if (isset($_POST["logout"])) {
    // Delete the authentication cookie
    setcookie("authenticated", "", time() - 3600, "/");
}</pre>
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Cookies play a crucial role in web development, enabling websites to remember user preferences and maintain user sessions. Understanding how to set, retrieve, and manage cookies in PHP is essential for building interactive and personalized web applications.
    </p>
</main>`
    },
    topic11: {
      title: "Sessions in PHP",
      description: `<main>
    <h1 id="Sessions in PHP">Sessions in PHP</h1>
    <p>
        Sessions in PHP are a way to store and manage user data across multiple pages during a user's visit to a website. Sessions are crucial for maintaining user-specific information, such as login status, shopping cart contents, and user preferences.
    </p>

    <h2 id="Importance of Sessions">Importance of Sessions</h2>
    <p>
        Sessions are crucial for various web applications. They enable:
    </p>
    <ul>
        <li><strong>User Authentication:</strong> Keeping users logged in during their visit.</li>
        <li><strong>Shopping Carts:</strong> Storing items in a cart while shopping online.</li>
        <li><strong>Personalization:</strong> Remembering user preferences and settings.</li>
        <li><strong>Security:</strong> Storing sensitive data securely on the server.</li>
    </ul>

    <h2 id="Creating a Session">Creating a Session</h2>
    <p>
        In PHP, you can create a session using the <span>session_start()</span> function. Once started, you can store and retrieve data in the session array <span>$_SESSION</span>.
    </p>
    <div class="code">
        <pre>// Start a session
session_start();

// Store data in the session
$_SESSION["username"] = "john_doe";</pre>
    </div>
    <p>Output :</p>
    <p>if session is not set then,</p>
    <div class="output">
        <img src="img/phpimg/sessionNotSet.png" alt="">
    </div>
    <p>if session is set then,</p>
    <div class="output">
        <img src="img/phpimg/sessionSet.png" alt="">
    </div>

    <h2 id="Starting Sessions">Starting Sessions</h2>
    <p>
        To start a session in PHP, you use the <span>session_start()</span> function. This function must be called before any output is sent to the browser.
    </p>
    <div class="code">
        <pre>&lt;?php
session_start();
?&gt;</pre>
    </div>

    <h2 id="Destroying a Session">Destroying a Session</h2>
    <p>
        Sessions can be destroyed using <span>session_destroy()</span> or <span>session_unset()</span> functions to log out a user or reset session data.
    </p>
    <div class="code">
        <pre>// Destroy the session
session_destroy();

// Unset specific session variables
unset($_SESSION["username"]);</pre>
    </div>

    <h2 id="Passing Session IDs">Passing Session IDs</h2>
    <p>
        Session IDs are typically passed between pages using cookies or URL parameters. By default, PHP uses cookies to manage session IDs, but you can also configure it to use URL parameters.
    </p>
    <div class="code">
        <pre>// Enable session ID in URL
ini_set('session.use_trans_sid', true);</pre>
    </div>

    <h2 id="Encoding and Decoding Sessions">Encoding and Decoding Sessions</h2>
    <p>
        Sessions are serialized and encoded before being stored and decoded when accessed. You can use custom session handlers to control how sessions are stored and managed.
    </p>
    <div class="code">
        <pre>// Custom session handler example
session_set_save_handler(new MySessionHandler());</pre>
    </div>

    <h2 id="Working with Sessions Without Cookies">Working with Sessions Without Cookies</h2>
    <p>
        While cookies are the default method for managing sessions, you can configure PHP to work without cookies using URL rewriting or other techniques.
    </p>
    <div class="code">
        <pre>// Disable cookies for sessions
ini_set('session.use_cookies', 0);</pre>
    </div>

    <h2 id="Using Sessions for User Authentication">Using Sessions for User Authentication</h2>
    <p>
        Sessions are commonly used for user authentication. When a user logs in, you can store their user ID or other identifying information in a session variable.
    </p>
    <div class="code">
        <pre>&lt;?php
if (isset($_POST["login"])) {
    // Check user credentials (e.g., username and password)
    if (valid_credentials($_POST["username"], $_POST["password"])) {
        // Store user ID in a session variable
        $_SESSION["user_id"] = get_user_id($_POST["username"]);
    }
}

if (isset($_POST["logout"])) {
    // Destroy the session to log the user out
    session_destroy();
}
?&gt;</pre>
    </div>

    <h2 id="Session Security">Session Security</h2>
    <p>
        Ensuring the security of sessions is essential to prevent unauthorized access or tampering with user data. PHP provides built-in session security features, but it's also important to follow best practices, such as regenerating session IDs after a user logs in.
    </p>
    <div class="code">
        <pre>&lt;?php
// Regenerate the session ID to prevent session fixation attacks
session_regenerate_id(true);
?&gt;</pre>
    </div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Sessions are a critical aspect of web development in PHP. They allow developers to maintain user-specific data and implement features like user authentication and shopping carts. Understanding how to start, use, and secure sessions is fundamental for building interactive and secure web applications.
    </p>

</main>`
    },
    topic12: {
      title: "Working with File System in PHP",
      description: `<main>
    <h1 id="Working with File System in PHP">Working with File System in PHP</h1>

    <h2 id="File Permissions">File Permissions</h2>
    <p>
        File permissions in PHP are essential for controlling who can access and
        manipulate files. Permissions include read, write, and execute permissions
        for the owner, group, and others.
    </p>
    <div class="code">
        <pre>// Example: Setting file permissions
chmod("file.txt", 0644);</pre>
    </div>

    <h2 id="File Operations">File Operations</h2>
    <p>
        PHP provides various functions for working with files, including opening,
        reading, writing, copying, renaming, deleting, and closing files.
    </p>
    <ul>
        <li>
            <span>Opening and Reading a File : </span>

            To open and read a file in PHP, you can use the
            <span>fopen()</span> function to open the file and
            <span>fread()</span> function to read its contents. Here's an example:
            <div class="code">
                <pre>$file = fopen("example.txt", "r");
$content = fread($file, filesize("example.txt"));
echo $content;
fclose($file);</pre>
                </div>
                <p>Output :</p>
                <div class="output">
                    <img src="img/phpimg/fileRead.png" alt="">
                </div>
            </li>

        <li>
            <span>Writing to a File : </span>

            To write data to a file in PHP, you can use the
            <span>fopen()</span> function with the "w" mode to open the file for
            writing and the <span>fwrite()</span> function to write data. Here's an
            example:
            <div class="code">
                <pre>$file = fopen("output.txt", "w");
fwrite($file, "Hello, PHP!");
fclose($file);</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/fileWritten.png" alt="">
            </div>
            <p>data in the file :</p>    
            <div class="output">
                <img src="img/phpimg/fileWrittenData.png" alt="">
            </div>
        </li>

        <li>
            <span>Copying Files : </span>

            You can copy files in PHP using the <span>copy()</span> function. It
            takes the source file path and the destination file path as arguments.
            Here's an example:
            <div class="code">
                <pre>copy("source.txt", "destination.txt");</pre>
            </div>
            <p>Data in the file :</p>
            <div class="output">
                <img src="img/phpimg/fileCopy.png" alt="">
            </div>
        </li>

        <li>
            <span>Renaming Files : </span>
            To rename a file in PHP, you can use the <span>rename()</span> function.
            It takes the current file name and the new file name as arguments.
            Here's an example:
            <div class="code">
                <pre>rename("old_file.txt", "new_file.txt");</pre>
            </div>
        </li>

        <li>
            <span>Deleting a File : </span>

            To delete a file in PHP, you can use the <span>unlink()</span> function.
            It takes the file path as an argument. Here's an example:
            <div class="code">
                <pre>if(unlink("file_to_delete.txt")){
    echo "File deleted successfully";
}</pre>
            </div>
            <p>Output :</p>
            <div class="output">
                <img src="img/phpimg/fileDelete.png" alt="">
            </div>
        </li>
    </ul>

    <h2 id="File System Functions">File System Functions</h2>
    <p>
        PHP offers a range of file system functions to interact with files and
        directories, including <span>file_exists()</span>, <span>is_file()</span>,
        <span>is_dir()</span>, and more.
    </p>
    <div class="code">
        <pre>// Example: Checking if a file exists
if (file_exists("file.txt")) {
    echo "File exists.";
}</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/fileExists.png" alt="">
    </div>

    <h2 id="Working with Directories">Working with Directories</h2>
    <p>
        PHP allows you to work with directories, create new directories, list
        directory contents, and navigate through the file system.
    </p>
    <div class="code">
        <pre>// Example: Creating a directory
mkdir("new_directory");

// Example: Listing directory contents
$files = scandir("directory_path");
foreach ($files as $file) {
    echo $file . "&lt;br&gt;";
}</pre>
    </div>
    <p>Output :</p>
    <div class="output">
        <img src="img/phpimg/fileDirCreated.png" alt="">
    </div>
    <p>files in the directory :</p>
    <div class="output"><img src="img/phpimg/fileDirData.png" alt=""></div>

    <h2 id="Conclusion">Conclusion</h2>
    <p>
        Working with the file system is an essential part of many PHP
        applications. Understanding file permissions, file operations, file system
        functions, and directory manipulation is crucial for building robust and
        functional file-based applications.
    </p>

</main>`
    },
    
  };
  
  // Function to display the content based on the selected topic
  function showContent(topicId) {
    const contentDisplay = document.getElementById('content-display');
    
    // Get the topic content from the JavaScript object
    const topic = topics[topicId];
  
    // Update the HTML content dynamically
    contentDisplay.innerHTML = `
       <!--h2>${topic.title}</h2-->
      <p>${topic.description}</p>
    `;
  }