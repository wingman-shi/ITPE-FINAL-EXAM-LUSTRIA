cons studentIdInput =
document.getElementById('studentId');
studentIdInput.addEventListener('input',function() {
cons idPattern=d(5);
if ('!idPattern.test(studentIdInput.value)) {
studentIdInput.setCustomValidity('Student ID must start with 5 digits');
}else {
studentIdInput.setCustomValidity(");
}
;

alert('Registration successful! Welcome to WIT.');
link
window.location.href = 'home.html');

});