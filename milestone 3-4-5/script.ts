
// Ensure html2pdf is globally available
declare const html2pdf: any;

// Get form and preview elements(initialization)
const form = document.getElementById("resumeForm") as HTMLFormElement;
const resumePage = document.getElementById("resumePage") as HTMLElement;
const resumePhoto = document.getElementById("resumePhoto") as HTMLImageElement;
const resumeName = document.getElementById("resumeName") as HTMLHeadingElement;
const resumeEmail = document.getElementById("resumeEmail") as HTMLParagraphElement;
const resumePhone = document.getElementById("resumePhone") as HTMLParagraphElement;
const resumeEducation = document.getElementById("resumeEducation") as HTMLParagraphElement;
const resumeWorkExperience = document.getElementById("resumeWorkExperience") as HTMLParagraphElement;
const resumeSkills = document.getElementById("resumeSkills") as HTMLParagraphElement;
const downloadPdfButton = document.getElementById('download-pdf') as HTMLButtonElement;
const backButton = document.getElementById("backButton") as HTMLButtonElement;
const editButton = document.getElementById("editButton") as HTMLButtonElement;
const resumeContent = document.getElementById("resumeContent") as HTMLDivElement;
const shareLinkButton = document.getElementById("shareLinkButton") as HTMLButtonElement;

// Handle form submission
form.addEventListener("submit", async (event: Event) => {
    event.preventDefault();
/*Prevent default is used with event bcoz it cancels to submit the form in case of any unusual input (very important*/

    // Collect form values
    const name = (document.getElementById("name") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const education = (document.getElementById("education") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
    const photoInput = document.getElementById("photo") as HTMLInputElement;

    //for collecting photo(if collect then store else leave empty )
    const photoFile = photoInput.files ? photoInput.files[0] : null;
    let photoBase64 = '';//Reason to use this when we share te photo url would be veru so this function photoBase64 makes it small

    if (photoFile) {
        photoBase64 = await fileToBase64(photoFile);  //collecting photo
        // Store the photo in localStorage instead of passing it in the URL
        localStorage.setItem("resumePhoto", photoBase64);
        resumePhoto.src = photoBase64;
    }

    // Populate the resume preview/Displaying data
    resumeName.textContent = name;
    resumeEmail.textContent = `Email: ${email}`;
    resumePhone.textContent = `Phone: ${phone}`;
    resumeEducation.textContent = `${degree} from ${education}`;
    resumeWorkExperience.textContent = workExperience;
    resumeSkills.textContent = skills;

    // Hide form and show resume page
    document.querySelector(".container")?.classList.add("hidden");
    resumePage.classList.remove("hidden");//resume will be shown after generated from this
      //hidden means jab resume generate ho to form hidden hojaye

   /* query selector in JS: The document. querySelector() function is a method in JavaScript that allows you to select the first element within the document */ 

  

// Convert photo to Base64
 //nesessarry to make function to solve error for fileToBase64
function fileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result as string);
/*.onloadend function jab page pr image load hojaye gi tab uske URL ko chote chte strings me convert krdega
reader.result as string)*/
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};
});

























































