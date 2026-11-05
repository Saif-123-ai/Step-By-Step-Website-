import test from 'node:test';
import assert from 'node:assert/strict';
import {
  isValidIndianPhone,
  normalizeIndianPhone,
  formatWhatsAppMessage,
  generateWhatsAppUrl,
  validateEnquiryForm,
} from './enquiry';

test('isValidIndianPhone correctly validates 10-digit Indian mobile numbers', () => {
  // Valid formats
  assert.equal(isValidIndianPhone('8447832910'), true);
  assert.equal(isValidIndianPhone('+91 84478 32910'), true);
  assert.equal(isValidIndianPhone('918447832910'), true);
  assert.equal(isValidIndianPhone('08447832910'), true);
  assert.equal(isValidIndianPhone('9876543210'), true);
  assert.equal(isValidIndianPhone('7000000000'), true);
  assert.equal(isValidIndianPhone('6123456789'), true);

  // Invalid formats
  assert.equal(isValidIndianPhone('12345'), false);
  assert.equal(isValidIndianPhone('5555555555'), false);
  assert.equal(isValidIndianPhone(''), false);
  assert.equal(isValidIndianPhone('abcdefghij'), false);
  assert.equal(isValidIndianPhone('987654321'), false);
  assert.equal(isValidIndianPhone('987654321000'), false);
});

test('normalizeIndianPhone extracts clean 10-digit mobile number', () => {
  assert.equal(normalizeIndianPhone('+91 84478 32910'), '8447832910');
  assert.equal(normalizeIndianPhone('08447832910'), '8447832910');
  assert.equal(normalizeIndianPhone('918447832910'), '8447832910');
  assert.equal(normalizeIndianPhone('8447832910'), '8447832910');
});

test('formatWhatsAppMessage matches exact prompt format with Class 5 to 12 and N/A', () => {
  const result = formatWhatsAppMessage({
    studentName: 'Zaid Khan',
    parentName: 'Rashid Khan',
    phoneNumber: '8447832910',
    currentClass: 'Class 5',
    interestedProgramme: 'CBSE Board Coaching',
    message: 'Seeking evening batch details for Class 5',
  });

  assert.ok(result.includes('Hello Step By Step Coaching Centre,'));
  assert.ok(result.includes('I would like to enquire about admission.'));
  assert.ok(result.includes('Student Name: Zaid Khan'));
  assert.ok(result.includes('Parent/Guardian Name: Rashid Khan'));
  assert.ok(result.includes('Phone Number: 8447832910'));
  assert.ok(result.includes('Current Class: Class 5'));
  assert.ok(result.includes('Interested Programme: CBSE Board Coaching'));
  assert.ok(result.includes('Additional Message:\nSeeking evening batch details for Class 5'));
  assert.ok(result.includes('Thank you.'));
});

test('formatWhatsAppMessage correctly includes N/A as a genuine programme selection', () => {
  const result = formatWhatsAppMessage({
    studentName: 'Sara Ali',
    parentName: 'Imran Ali',
    phoneNumber: '9876543210',
    currentClass: 'Class 8',
    interestedProgramme: 'N/A',
  });

  assert.ok(result.includes('Current Class: Class 8'));
  assert.ok(result.includes('Interested Programme: N/A'));
  assert.ok(result.includes('Thank you.'));
});

test('generateWhatsAppUrl builds valid wa.me link with encoded params', () => {
  const url = generateWhatsAppUrl({
    studentName: 'Ayaan',
    parentName: 'Farhan',
    phoneNumber: '9876543210',
    currentClass: 'Class 12',
    interestedProgramme: 'JEE Preparation',
  });

  assert.ok(url.startsWith('https://wa.me/918447832910?text='));
  assert.ok(url.includes(encodeURIComponent('Current Class: Class 12')));
  assert.ok(url.includes(encodeURIComponent('Interested Programme: JEE Preparation')));
});

test('validateEnquiryForm allows N/A as a valid programme option and verifies required fields', () => {
  // Empty form
  const emptyErrors = validateEnquiryForm({
    studentName: '',
    parentName: '',
    phoneNumber: '',
    currentClass: '',
    interestedProgramme: '',
  });
  assert.ok(emptyErrors.studentName);
  assert.ok(emptyErrors.parentName);
  assert.ok(emptyErrors.phoneNumber);
  assert.ok(emptyErrors.currentClass);
  assert.ok(emptyErrors.interestedProgramme);

  // Valid form with N/A programme
  const validErrors = validateEnquiryForm({
    studentName: 'Ayaan',
    parentName: 'Farhan',
    phoneNumber: '9876543210',
    currentClass: 'Class 5',
    interestedProgramme: 'N/A',
  });
  assert.equal(Object.keys(validErrors).length, 0);
});
