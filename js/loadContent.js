document.addEventListener('DOMContentLoaded', function() 
{
    console.log("content loaded")
    loadContent();
});

function loadContent() 
{
    // Creates an instance of the XMLHttpRequest object, which is used to send HTTP requests.
    const xhr = new XMLHttpRequest();
    
    // Prepares an HTTP GET request to fetch the content of the HTML file. 
    // The third argument "true" specifies that the request should be asynchronous.
    try 
    {
        xhr.open('GET', `../views/section.html`, true);

        // This is an event handler that listens for changes in the state of the request. 
        // When the state becomes 4 (request is complete) and the status is 200 (success)
        // The handler updates the content of content_section.
        xhr.onreadystatechange = function () 
        {
            if (xhr.readyState === 4 && xhr.status === 200) 
            {
                // Creates a new instance of DOMParser
                const parser = new DOMParser();
                    
                // DOMParser analises the characters as XML or HTML
                const responseDoc = parser.parseFromString(xhr.responseText, 'text/html');

                // Reads the content within content-wrapper
                const responseContent = responseDoc.querySelector('.content-wrapper');
                                        
                // If there is a child within contentSection the following code will delete it
                // After that, the new content will be loaded
                if (contentWrapper.firstChild) {
                    contentWrapper.removeChild(contentWrapper.firstChild);
                }
                contentWrapper.appendChild(responseContent);                
            }
        };
        // This sends the HTTP request to fetch the content.
        xhr.send();
    } 
    catch (error) 
    {
        console.log('Failed to retrieve path:', error);
    }
}
