1. **Component Props (`Props` interface):**
- `setBookingData`: A function to update the booking data 
   > `Type: (data: StateData{}) => void`
- `onClose`: A function to close the edit booking modal.
   > `Type: () => void`
- `editingBookingDataProps`: The data of the booking being edited.
   > - `Type: BookingData
   > - `Optional` 
      
- `bookingData`: An array of booking data.
   > `Type: BookingData{}`
   > - `Optional`
   > - `No Usecase Now`
- `owner`: Owner information.
   > - `Type: `Object`
   > - `Optional`
     


2. **State and Effect Hooks:**
    - `loading`: A state variable to track whether a request is loading.
    - `updatedData`: A state variable used to trigger a page reload. 
    > `No UseCase Now`
    - `editingBookingData`: State to hold the booking data being edited (Usecase: For Data Update)
    - const formRef = useRef<HTMLFormElement>(null) -> For Form Date Collection
    - `useEffect`: React hook to perform side effects (e.g., updating state) when certain dependencies change.
      > - `UseCase: -> For Data Update

3. **Form Submission (`handleUpdate` function):**
    - This function handles the form submission when the "Update" button is clicked.
    - It collects form field values using `FormData` and validates them.
    - It validates guest name and other field values using regular expressions.
    - Makes an API call to update the booking data using `axios.post`.
    - If the update is successful, it updates the booking data in the state and displays a success toast message.
    - If there's an error, it displays an error toast message.
4.
```ts
const { data } = await axios.post("/booking/update-booking", {
          id: editingBookingData._id,
          guestName: formValues.guest_name,
          checkInDate: formValues.checkInDate,
          checkOutDate: formValues.checkOutDate,
          roomCatagory: formValues.roomCategory,
          numberOfRooms: formValues.nor,
            numberOfPersons: formValues.nop,
          bookingAmount: formValues.bookingAmount,
            advanceAmount: formValues.advanceAmount,
            dueAmount: formValues.dueamount,
            advanceDate: formValues.Advancedate,
            bookingSource: formValues.bookingSource,
            booikingBy: formValues.bb,
            plan: formValues.plan,
            contactNumber: formValues.cn,
            remarks: formValues.remark,
        });
```
- Backend API - `/booking/update-booking`
- Same name as the backend API
- `Form's Input Name` -> `Backend API's Input Name`