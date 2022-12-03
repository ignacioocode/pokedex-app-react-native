import { useState } from "react"
import { StyleSheet, Text, View, TextInput, Button, Keyboard } from "react-native"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { user, userDetails} from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {
    const [error, setError] = useState('')
    const { login } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formValue) => {
            setError('')
            const { username, password } = formValue
    
            if((username !== user.username || password !== user.password)){
                setError('El usuario o contraseña son incorrectos')
            } else {
                login(userDetails)
            }
        }
    })

    return (
        <View>
            <Text style={styles.title}>Iniciar Sesión</Text>
            <Text style={styles.error}>{formik.errors.username}</Text>
            <TextInput
                placeholder="Nombre de usuario"
                style={styles.input}
                autoCapitalize='none'
                value={formik.values.username}
                onChangeText={(text) => formik.setFieldValue('username', text)}
            />
            <Text style={styles.error}>{formik.errors.password}</Text>
            <TextInput
                placeholder="Contraseña"
                style={styles.input}
                autoCapitalize='none'
                secureTextEntry={true}
                value={formik.values.password}
                onChangeText={(text) => formik.setFieldValue('password', text)}
            />
            <Button title="entrar" onPress={formik.handleSubmit}/>
            <Text style={styles.error}>{error}</Text>
        </View>
    )
}
const initialValues = () => {
    return {
        username: '',
        password: ''
    }
}

const validationSchema = () => {
    return {
        username: Yup.string().required('El nombre de usuario es obligatorio'),
        password: Yup.string().required('La contraseña es requerida')
    }
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 30
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20
    },
    error: {
        color: '#f00',
        marginHorizontal: 12
    }
})

export default LoginForm 