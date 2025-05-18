from cryptography.fernet import Fernet

fixed_key = Fernet.generate_key()
fixed_key.decode()
print(fixed_key)