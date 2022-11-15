/**
 * basin.js
 * The minimum script to add form functionality to a site using usebasin.com
 * Integrates with the existing webflow success and fail
 */
{
    let form = document.querySelector('w-form').firstChild,
        success = document.querySelector('w-form-done'),
        failure = document.querySelector('w-form-fail');

    form.onsubmit = function (e) {
        e.preventDefault();

        let formData = new FormData(form),
            xhr = new XMLHttpRequest();

        xhr.open('POST', form.action, true);
        xhr.send(formData);
        xhr.onload = () => {
            if (xhr.status === 200) {
                form.style.display = 'none';
                success.style.display = 'block';
            } else {
                console.log(JSON.parse(xhr.response));
                form.style.display = 'none';
                failure.style.display = 'block';
            }
        };
    };

    // Honeypot pseudocode
    // 1 add hashing to the real input names and labels (?)
    // 2 add fake inputs (?)
    // 3 hide fake inputs (??)
}
