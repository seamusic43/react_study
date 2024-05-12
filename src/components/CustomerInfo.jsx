import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function CreateCustomer() {
    return (
        <div>
            <h1>Create Customer</h1>
            <form>
                <div>
                    <label>id : </label>
                    <Input type="text" placeholder="enter the id" />
                </div>
                <div>
                    <label>company name: </label>
                    <Input type="text" placeholder="enter the company name" />
                </div>
                <div>
                    <label>email: </label>
                    <Input type="email" placeholder="enter the email" />
                </div>
                <div>
                    <Label>정산 타입</Label>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="정산 타입을 선택해주세요." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Choice</SelectLabel>
                                <SelectItem value="DAY">일</SelectItem>
                                <SelectItem value="WEEK">주</SelectItem>
                                <SelectItem value="MONTH">월</SelectItem>
                                <SelectItem value="CUSTOM">사용자 지정</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label>사업자번호</label>
                    <Input type="text" placeholder="enter the business number" />
                </div>
                <button onClick={() => this.props.onCreate(this.state)}>Create</button>
            </form>
        </div>
    );
}

export { CreateCustomer };
